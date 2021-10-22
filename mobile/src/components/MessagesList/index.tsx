import React from "react";

import { ScrollContainer, ContentContainerStyleObject } from "./styles";

import { Message } from "../Message";

import { MESSAGES_EXAMPLE } from "../../utils/messages";

export function MessagesList() {
  return (
    <ScrollContainer
      contentContainerStyle={ContentContainerStyleObject}
      keyboardShouldPersistTaps="never"
    >
      {
        MESSAGES_EXAMPLE.map((message) => (
          <Message key={message.id} message={message} />
        ))
      }
    </ScrollContainer>
  );
}
