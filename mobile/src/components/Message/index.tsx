import React from "react";

import { UserPhoto } from "../UserPhoto";

import { MotiContainer, Content, Footer, UserName } from "./styles";

export interface IMessage {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

export interface IMessageProps {
  message: IMessage;
}

export function Message({ message }: IMessageProps) {
  return (
    <MotiContainer
      from={{ opacity: 0, translateY: -50 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 700 }}
    >
      <Content>
        {message.text}
      </Content>

      <Footer>
        <UserPhoto
          uri={message.user.avatar_url}
          isSmall
        />

        <UserName>
          {message.user.name}
        </UserName>
      </Footer>
    </MotiContainer>
  )
}
