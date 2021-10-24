import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;

	justify-content: space-between;
	align-items: flex-start;

	> div {
		margin-top: 3.2rem !important;
	}

	@media(max-width: 1070px) {
		justify-content: center;
		align-items: center;
	}
`;

export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4rem;
	flex: 1;

	@media(max-width: 1070px) {
		margin: 8rem 0;
		justify-content: flex-start;
		width: 100%;
		max-width: 48rem;
		padding: 0 0.8rem;
	}
`;

export const Message = styled.li`
	max-width: 44rem;

	&:nth-child(2) {
		margin-left: 8rem;

		@media(max-width: 1070px) {
			margin: 0;
		}
	}

	> p {
		font-size: 2rem;
		line-height: 2.8rem;
	}
`;

export const MessageUser = styled.div`
	margin-top: 1.6rem;

	display: flex;
	align-items: center;
	gap: 1.2rem;

	span {
		font-size: 1.6rem;
	}
`;

export const UserImage = styled.div`
	padding: 0.2rem;
	background: linear-gradient(
		100deg,
		${(props) => props.theme.colors.pink},
		${(props) => props.theme.colors.yellow}
	);
	border-radius: 50%;
	line-height: 0;

	img {
		border-radius: 50%;
		border: 0.4rem solid ${(props) => props.theme.colors.black2};
	}
`;
