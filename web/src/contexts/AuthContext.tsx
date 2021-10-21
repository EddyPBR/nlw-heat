import { createContext, useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/router";
import { api } from "@services/api";
import toast from "react-hot-toast";

interface IAuthProvider {
  children: ReactNode;
}

interface IUser {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
}

interface IAuthContextData {
  user: IUser | null;
  signInUrl: string;
  signOut: () => void;
  isLoading: boolean;
}

interface IAuthResponse {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`;

  async function signIn(githubCode: string) {
    setIsLoading(true);

    try {
      const response = await api.post<IAuthResponse>("authenticate", {
        code: githubCode,
      });

      const { token, user } = response.data;

      localStorage.setItem("@dowhile:token", token);

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(user);
      toast.success("Welcome!");
    } catch {
      toast.error("Failed to sign-in :(");
    } finally {
      setIsLoading(false);
    }
  }

  async function profileInfo() {
    setIsLoading(true);

    try {
      const { data: user } = await api.get<IUser>("profile");
      setUser(user);
    } catch {
      toast.error("Failed to get user profile");
    } finally {
      setIsLoading(false);
    }
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem("@dowhile:token");
    toast.error("goodbye :(");
  }

  useEffect(() => {
    const token = localStorage.getItem("@dowhile:token");

    if (token) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      profileInfo();
    }
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if(hasGithubCode) {
      const [urlWithoutGithub, githubCode] = url.split("?code=");

      router.replace(`?code=${githubCode}`, urlWithoutGithub, { shallow: true });

      signIn(githubCode);
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      signInUrl,
      signOut,
      isLoading
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;
