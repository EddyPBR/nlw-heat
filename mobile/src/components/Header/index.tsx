import React from "react";

import { useAuth } from "../../hooks/useAuth";

import { TouchableOpacity } from "react-native";

import { UserPhoto } from "../UserPhoto/index";

import { Container, LogoutButton, LogoutText } from "./styles";

import LogoSvg from "../../assets/logo.svg";

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <LogoSvg />

      <LogoutButton>
        {
          user && (
            <TouchableOpacity onPress={signOut}>
              <LogoutText>Sair</LogoutText>
            </TouchableOpacity>
          )
        }
        <UserPhoto uri={user?.avatar_url} />
      </LogoutButton>
    </Container>
  )
}
