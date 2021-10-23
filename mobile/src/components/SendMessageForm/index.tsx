import React from "react";

import { Button } from "../Button";

import { Container, Input } from "./styles";
import { theme } from "../../styles/theme";

export function SendMessageForm() {
  return (
    <Container>
      <Input
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={theme.colors.gray1}
        style={{
          textAlignVertical: "top"
        }}
      />
      <Button
        color={theme.colors.white}
        backgroundColor={theme.colors.pink}
        title="ENVIAR MENSAGEM"
      />
    </Container>
  )
}
