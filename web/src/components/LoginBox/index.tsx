import { VscGithubInverted } from "react-icons/vsc";

import { useAuth } from "@hooks/useAuth";

import { Wrapper, SignInButton } from "./styles";

export function LoginBox() {
	const { signInUrl } = useAuth();

	return (
		<Wrapper>
			<strong>Entre e compartilhe sua mensagem</strong>

			<SignInButton href={signInUrl}>
				<VscGithubInverted size={24} />
				Entrar com github
			</SignInButton>
		</Wrapper>
	);
}
