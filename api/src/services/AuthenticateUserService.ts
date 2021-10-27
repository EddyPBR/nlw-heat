import axios from "axios";
import prismaClient from "@database/index";
import { sign } from "jsonwebtoken";

interface IAccessTokenResponse {
  access_token: string;
}

interface IUserResponse {
  avatar_url: string;
  login: string;
  id: number;
  name: string;
}

type scopeType = "web" | "mobile";

class AuthenticateUserService {
	async execute(code: string, scope: scopeType) {
		const url = "https://github.com/login/oauth/access_token";

		const { data: accessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
			params: {
				client_id: scope === "mobile" ? process.env.GITHUB_CLIENT_MOBILE_ID : process.env.GITHUB_CLIENT_WEB_ID,
				client_secret: scope === "mobile" ? process.env.GITHUB_CLIENT_MOBILE_SECRET : process.env.GITHUB_CLIENT_WEB_SECRET,
				code
			},
			headers: {
				"Accept": "application/json"
			}
		});

		const { data: userDataResponse } = await axios.get<IUserResponse>("https://api.github.com/user", {
			headers: {
				authorization: `Bearer ${accessTokenResponse.access_token}`
			}
		});

		const { login, id, avatar_url, name } = userDataResponse;
    
		const user = await prismaClient.user.findFirst({
			where: {
				github_id: id
			}
		});

		if (!user) {
			await prismaClient.user.create({
				data: {
					github_id: id,
					login,
					avatar_url,
					name
				}
			});
		}

		const payload = {
			user: {
				name: user.name,
				avatar_url: user.avatar_url,
				id: user.id
			}
		};

		const token = sign(payload, process.env.JWT_SECRET, {
			subject: user.id,
			expiresIn: "1d"
		});

		return { token, user };
	}
}

export { AuthenticateUserService };
