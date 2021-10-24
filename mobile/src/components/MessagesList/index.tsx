import React, { useState, useEffect } from "react";

import { ScrollContainer, ContentContainerStyleObject } from "./styles";

import { Message, IMessage } from "../Message";

import { api } from "../../services/api";

export function MessagesList() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    async function getMessages() {
      const { data: responseMessages } = await api.get<IMessage[]>("/messages?limit=3");
      setMessages(responseMessages);
    }

    getMessages();
  }, []);

  return (
    <ScrollContainer
      contentContainerStyle={ContentContainerStyleObject}
      keyboardShouldPersistTaps="never"
    >
      {
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))
      }
    </ScrollContainer>
  );
}
