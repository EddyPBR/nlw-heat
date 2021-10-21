import type { NextPage } from "next";
import { ContentWrapper } from "@styles/global";

import { MessageList } from "@components/MessageList";
import { LoginBox } from "@components/LoginBox";
import { SendMessageForm } from "@components/SendMessageForm";

import { useAuth } from "@hooks/useAuth";

const Home: NextPage = () => {
	const { isLoading, user } = useAuth();

	return (
		<ContentWrapper isSigned={!!user ? true : false}>
			<MessageList />

			{(isLoading || !user)
				? <LoginBox />
				: <SendMessageForm />
			}
		</ContentWrapper>
	)
};

export default Home;
