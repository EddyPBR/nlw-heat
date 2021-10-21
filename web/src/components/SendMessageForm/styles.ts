import { darken } from "polished";
import styled from "styled-components";

export const FormWrapper = styled.div`
	background-color: ${(props) => darken(0.03, props.theme.colors.black3)};
	padding: 2.4rem;
	align-self: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;

	position: relative;
`;

export const UserInfo = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	strong {
		font-size: 2.4rem;
		line-height: 3rem;
		margin-top: 1.6rem;
	}

	span {
		display: flex;
		align-items: center;

		margin-top: 0.8rem;
		color: ${(props) => props.theme.colors.gray2};
		gap: 0.8rem;
	}
`;

export const UserImage = styled.div`
	padding: 0.3rem;
	background: linear-gradient(
		100deg,
		${(props) => props.theme.colors.pink},
		${(props) => props.theme.colors.yellow}
	);
	border-radius: 50%;
	line-height: 0;

	img {
		border-radius: 50%;
		border: 0.6rem solid ${(props) => props.theme.colors.black2} !important;
	}
`;

export const SignOutButton = styled.button`
	background-color: transparent;
	border: 0;
	color: ${(props) => props.theme.colors.gray2};

	position: absolute;
	left: 2.4rem;
	top: 2.4rem;

	cursor: pointer;
	transition: color 0.2s;

	&:hover {
		color: ${(props) => darken(0.16, props.theme.colors.gray2)};
	}
`;

export const MessageForm = styled.form`
	display: flex;
	flex-direction: column;
	align-self: stretch;
	margin-top: 4.8rem;

	background-color: ${(props) => darken(0.03, props.theme.colors.black4)};

	label {
		padding: 1.8rem 2.4rem;
		background-color: ${(props) => props.theme.colors.black4};
		font: ${(props) => props.theme.fonts.bold};
	}

	textarea {
		background: transparent;
		border: 0;
		padding: 2.4rem;
		resize: none;
		height: 16rem;
		color: ${(props) => props.theme.colors.gray3};
		font-size: 1.6rem;
		line-height: 2.4rem;

		&:focus {
			outline: 0;
		}

		&::placeholder {
			color: ${(props) => props.theme.colors.gray1};
		}
	}

	button {
		background-color: ${(props) => props.theme.colors.pink};
		margin: 2.4rem;
		padding: 0 3.2rem;
		height: 4rem;
		color: ${(props) => props.theme.colors.white};
		font-size: 1.4rem;
		font-weight: bold;
		text-transform: uppercase;
		transition: background-color 0.3s;

		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.6rem;
		align-self: flex-end;

		&:hover {
			background-color: ${(props) => darken(0.1, props.theme.colors.pink)};
		}
	}
`;
