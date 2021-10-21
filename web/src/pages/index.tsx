import { LoginBox } from "@components/LoginBox";
import { MessageList } from "@components/MessageList";
import { SendMessageForm } from "@components/SendMessageForm";
import { useAuth } from "@hooks/useAuth";
import { ContentWrapper } from "@styles/global";
import type { NextPage } from "next";

const Home: NextPage = () => {
	const { isLoading, user } = useAuth();

	return (
		<ContentWrapper isSigned={user ? true : false}>
			<MessageList />

			{isLoading || !user ? <LoginBox /> : <SendMessageForm />}
		</ContentWrapper>
	);
};

export default Home;
