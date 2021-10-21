import type { NextPage } from "next";
import { ContentWrapper } from "@styles/global";

import { MessageList } from "@components/MessageList";
import { LoginBox } from "@components/LoginBox";

const Home: NextPage = () => {
	return (
		<ContentWrapper>
			<MessageList />
			<LoginBox />
		</ContentWrapper>
	)
};

export default Home;
