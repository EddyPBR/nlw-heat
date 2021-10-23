import React, { useState } from "react";

import { Button } from "../Button";

import { Container, Input } from "./styles";
import { theme } from "../../styles/theme";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  return (
    <Container>
      <Input
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={theme.colors.gray1}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        style={{
          textAlignVertical: "top"
        }}
        editable={!sendingMessage}
      />
      <Button
        color={theme.colors.white}
        backgroundColor={theme.colors.pink}
        title="ENVIAR MENSAGEM"
      />
    </Container>
  )
}
