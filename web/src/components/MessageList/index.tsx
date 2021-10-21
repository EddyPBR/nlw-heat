import { useState, useEffect } from "react";
import Image from "next/image";

import { Wrapper, List, Message, MessageUser, UserImage } from "./styles";
import { api } from "@services/api";
import io from "socket.io-client";

interface IMessage {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

interface IResponseMessage {
  data: IMessage[];
}

export function MessageList() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  const messagesQueue: IMessage[] = [];

  const socket = io(process.env.NEXT_PUBLIC_API_URL || "");

  socket.on("new_message", (newMessage: IMessage) => {
    messagesQueue.push(newMessage);
  });

  useEffect(() => {
    setInterval(() => {
      if(messagesQueue.length > 0) {
        setMessages(prevState => [
          messagesQueue[0],
          prevState[0],
          prevState[1],
        ].filter(Boolean));

        messagesQueue.shift();
      }
    }, 3000);
  }, []);

  useEffect(() => {
    async function getMessages() {
      try {
        const { data: messages }: IResponseMessage = await api.get("messages", {
          params: {
            limit: 3
          }
        });

        setMessages(messages);
      } catch {
        console.log("Failed to get messages");
      }
    }

    getMessages();
  }, []);

  return (
    <Wrapper>
      <Image src="/assets/logo.svg" priority={true} alt="DoWhile 2021" width="280" height="28" />

      <List>
        {messages.map((message, index) => 
          <Message key={index}>
            <p>{message.text}</p>

            <MessageUser>
              <UserImage>
                <Image src={message.user.avatar_url} alt={message.user.name} width="30" height="30" />
              </UserImage>

              <span>{message.user.name}</span>
            </MessageUser>
          </Message>
        )}
      </List>
    </Wrapper>
  );
}
