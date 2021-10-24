import React from "react";

import { KeyboardAvoidingView, Platform } from "react-native";

import { Container } from "./styles";

import { Header } from "../../components/Header";
import { MessagesList } from "../../components/MessagesList";
import { SignInBox } from "../../components/SignInBox";
import { SendMessageForm } from "../../components/SendMessageForm";

import { useAuth } from "../../hooks/useAuth";

export function Home() { 
  const { user } = useAuth();

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined }
    >
      <Container>
        <Header />
        <MessagesList />
        {
          user
          ? <SendMessageForm />
          : <SignInBox />
        }
      </Container>
    </KeyboardAvoidingView>
  )
}
