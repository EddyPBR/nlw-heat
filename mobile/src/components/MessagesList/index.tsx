import React, { useState, useEffect } from "react";

import { ScrollContainer, ContentContainerStyleObject } from "./styles";

import { Message, IMessage } from "../Message";

import { api } from "../../services/api";

import io from "socket.io-client";

export function MessagesList() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const messagesQueue: IMessage[] = [];

  const socket = io(process.env.API_URL || "");

	socket.on("new_message", (newMessage: IMessage) => {
		messagesQueue.push(newMessage);
	});

  useEffect(() => {
		setInterval(() => {
			if (messagesQueue.length > 0) {
				setMessages((prevState) =>
					[messagesQueue[0], prevState[0], prevState[1]].filter(Boolean)
				);

				messagesQueue.shift();
			}
		}, 3000);
	}, []);

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
