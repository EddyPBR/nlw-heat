import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { VscSignOut, VscGithubInverted } from "react-icons/vsc";

import { useAuth } from "@hooks/useAuth";
import { api } from "@services/api";
import Image from "next/image";

import {
	FormWrapper,
	UserImage,
	UserInfo,
	SignOutButton,
	MessageForm,
} from "./styles";

interface IMessageFormInputs {
	message: string;
}

export function SendMessageForm() {
	const { user, signOut } = useAuth();

	const { register, handleSubmit, reset } = useForm<IMessageFormInputs>();

	async function handleCreateMessage({ message }: IMessageFormInputs) {
		try {
			await api.post("messages", {
				message,
			});
			toast.success("Comment created!");
			reset();
		} catch {
			console.error("Failed, please try again :(");
		}
	}

	return (
		<FormWrapper>
			<SignOutButton onClick={signOut}>
				<VscSignOut size={32} />
			</SignOutButton>

			{user?.avatar_url && (
				<UserInfo>
					<UserImage>
						<Image
							src={user.avatar_url}
							alt={user.name}
							width={94}
							height={94}
						/>
					</UserImage>

					<strong>{user?.name}</strong>
					<span>
						<VscGithubInverted size={16} />
						{user?.login}
					</span>
				</UserInfo>
			)}

			<MessageForm onSubmit={handleSubmit(handleCreateMessage)}>
				<label htmlFor="message">Mensagem</label>
				<textarea
					{...register("message", {
						required: true,
					})}
					name="message"
					id="message"
					placeholder="Qual sua expecitativa para o evento?"
				/>

				<button type="submit">Enviar mensagem</button>
			</MessageForm>
		</FormWrapper>
	);
}
