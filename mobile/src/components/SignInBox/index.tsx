import React from "react";

import { useAuth } from "../../hooks/useAuth";

import { Container } from "./styles";

import { Button } from "../Button";

import { theme } from "../../styles/theme";

export function SignInBox() {
  const { signIn, isLoading } = useAuth();

  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={theme.colors.black1} 
        backgroundColor={theme.colors.yellow}
        icon="github"
        onPress={signIn}
        isLoading={isLoading}
      />
    </Container>
  )
}
