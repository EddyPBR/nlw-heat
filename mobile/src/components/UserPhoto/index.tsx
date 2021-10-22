import React from "react";

import { Image } from "react-native";

import { Avatar, Gradient } from "./styles";

interface IUserPhotoProps {
  uri: string | undefined;
  isSmall?: boolean;
}

import AvatarPng from "../../assets/avatar.png";

import { theme } from "../../styles/theme";

const AvatarPngUri = Image.resolveAssetSource(AvatarPng).uri;

export function UserPhoto({ uri, isSmall }: IUserPhotoProps) {
  return (
    <Gradient 
      colors={[
        theme.colors.pink, 
        theme.colors.yellow
      ]}
      start={{
        x: 0,
        y: 0.8
      }}
      end={{
        x: 0.9,
        y: 1
      }}
      isSmall={isSmall}
    >
      <Avatar source={{ uri: uri || AvatarPngUri }} isSmall={isSmall} />
    </Gradient>
  )
}
