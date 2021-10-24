import { Request, Response } from "express";
import { AuthenticateUserService } from "@services/AuthenticateUserService";

interface IAuthenticateUserRequestBody {
	code: string;
	scope: "web" | "mobile";
}

class AuthenticateUserController {
	async handle(request: Request, response: Response) {
		const { code, scope }: IAuthenticateUserRequestBody = request.body;
    
		const service = new AuthenticateUserService();
		const result = await service.execute(code, scope);

		return response.json(result);
	}
}

export { AuthenticateUserController };
