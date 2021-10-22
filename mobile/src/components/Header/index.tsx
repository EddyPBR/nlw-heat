import React from "react";

import { TouchableOpacity } from "react-native";

import { UserPhoto } from "../UserPhoto/index";

import { Container, LogoutButton, LogoutText } from "./styles";

import LogoSvg from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <LogoSvg />

      <LogoutButton>
        <TouchableOpacity>
          <LogoutText>Sair</LogoutText>
        </TouchableOpacity>

        <UserPhoto uri="https://avatars.githubusercontent.com/u/48658479?v=4" />
      </LogoutButton>
    </Container>
  )
}
