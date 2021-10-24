import React, { useState } from "react";

import { Button } from "../Button";

import { Container, Input } from "./styles";
import { theme } from "../../styles/theme";

import { ToastAndroid, Keyboard } from "react-native";

import { api } from "../../services/api";

export function SendMessageForm() {
  const [message, setMessage] = useState("");
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleCreateMessage() {
    const messageFormatted = message.trim();

    if(messageFormatted.length > 0) {
      setSendingMessage(true);

      await api.post("/messages", {
        message: messageFormatted,
      });
  
      setMessage("");
  
      Keyboard.dismiss();
  
      ToastAndroid.show("Message created!", ToastAndroid.SHORT);

      setSendingMessage(false);
    } else {
      ToastAndroid.show("Write a message to send!", ToastAndroid.SHORT);
    }
  }

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
        isLoading={sendingMessage}
        onPress={handleCreateMessage}
      />
    </Container>
  )
}
