import { Request, Response } from "express";
import { GetMessagesService } from "@services/GetMessagesService";

class GetMessagesController {
	async handle(request: Request, response: Response) {
		const { limit } = request.query;

		const formatedLimit = limit ? Number(limit) : 3;

		const service = new GetMessagesService();

		const result = await service.execute(formatedLimit);

		return response.status(200).json(result);
	}
}

export { GetMessagesController };
