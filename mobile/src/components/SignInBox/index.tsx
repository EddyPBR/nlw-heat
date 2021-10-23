import React from "react";

import { Container } from "./styles";

import { Button } from "../Button";

import { theme } from "../../styles/theme";

export function SignInBox() {
  return (
    <Container>
      <Button
        title="ENTRAR COM O GITHUB"
        color={theme.colors.black1} 
        backgroundColor={theme.colors.yellow}
        icon="github"
      />
    </Container>
  )
}
