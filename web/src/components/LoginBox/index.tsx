import { VscGithubInverted } from "react-icons/vsc";

import { Wrapper, SignInButton } from "./styles";

export function LoginBox() {
  return (
    <Wrapper>
      <strong>Entre e compartilhe sua mensagem</strong>
      <SignInButton>
        <VscGithubInverted size={24} />
        Entrar com github
      </SignInButton>
    </Wrapper>
  )
}
