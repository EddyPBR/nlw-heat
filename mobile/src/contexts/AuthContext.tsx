import React, { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSessions from "expo-auth-session";
import { api } from "../services/api";
import { ToastAndroid } from "react-native";

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
  isLoading: boolean;
  signIn: () => void;
  signOut: () => void;
}

interface IAuthResponse {
  token: string;
  user: IUser;
}

interface IAuthorizationResponse {
  params: {
    code?: string;
    error?: string;
  },
  type?: string;
}

export const AuthContext = createContext({} as IAuthContextData);

export function AuthProvider({ children }: IAuthProvider) {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function signIn() {
    try {
      setIsLoading(true);

      const authUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=read:user`;
      const authSessionResponse = await AuthSessions.startAsync({ authUrl }) as IAuthorizationResponse;

      if (authSessionResponse.type === "success" && authSessionResponse.params.error !== "access_denied") {
        const authResponse = await api.post<IAuthResponse>("/authenticate", { 
          code: authSessionResponse.params.code,
          scope: "mobile"
        });

        const { user, token } = authResponse.data;

        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        await AsyncStorage.setItem("@nlwheat:user", JSON.stringify(user));
        await AsyncStorage.setItem("@nlwheat:token", JSON.stringify(token));

        setUser(user);
      }
    } catch (err: any) {
      ToastAndroid.show(err.message, ToastAndroid.SHORT);
    } finally {
      setIsLoading(false);
    }
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.removeItem("@nlwheat:user");
    await AsyncStorage.removeItem("@nlwheat:token");
  }

  useEffect(() => {
    async function LoadUserStorageData() {
      try {
        const userStorage = await AsyncStorage.getItem("@nlwheat:user");
        const tokenStorage = await AsyncStorage.getItem("@nlwheat:token");

        if (userStorage && tokenStorage) {
          api.defaults.headers.common['Authorization'] = `Bearer ${JSON.parse(tokenStorage)}`;
          setUser(JSON.parse(userStorage));
        }
      } catch (err: any) {
        ToastAndroid.show(err.message, ToastAndroid.SHORT);
      } finally {
        setIsLoading(false);
      }
    }

    LoadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      isLoading,
      signIn,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const AuthConsumer = AuthContext.Consumer;
