import Image from "next/image";

import { Wrapper, List, Message, MessageUser, UserImage } from "./styles";

export function MessageList() {
  return (
    <Wrapper>
      <Image src="/assets/logo.svg" priority={true} alt="DoWhile 2021" width="280" height="28" />

      <List>
        <Message>
          <p>Não vejo a hora de começar esse DoWhile 2021!</p>

          <MessageUser>
            <UserImage>
              <Image src="https://github.com/EddyPBR.png" alt="Edvaldo Junior" width="30" height="30" />
            </UserImage>

            <span>
              Edvaldo Junior
            </span>
          </MessageUser>
        </Message>
      </List>
    </Wrapper>
  );
}
