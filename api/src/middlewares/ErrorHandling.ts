import type { Request, Response, NextFunction } from "express";
import { ApplicationException } from "@exceptions/ApplicationException";
import axios from "axios";
import { Prisma } from "@prisma/client";
import { isCelebrateError } from "celebrate";


export function ErrorHandling (
	err: Error,
	request: Request,
	response: Response,
	/*eslint-disable */
	next: NextFunction
	/*eslint-enable */
) {
	if (err instanceof ApplicationException) {
		return response.status(err.statusCode).json({ message: err.message });
	}

	if(isCelebrateError(err)) {
		let errorMessage = "";

		if(err.details?.get("body")) {
			errorMessage = err.details.get("body").details[0].message;
		} else if (err.details?.get("query")) {
			errorMessage = err.details.get("query").details[0].message;
		} else if (err.details?.get("headers")) {
			errorMessage = err.details.get("headers").details[0].message;
		} else {
			errorMessage = "Request unexpected error";
		}

		const formatedErrorMessage = errorMessage.replace(/"/g, "");
    
		return response.status(400).json({
			message: formatedErrorMessage,
		});
	}

	if(axios.isAxiosError(err)) {
		if(err.response.status === 401) {
			return response.status(401).json({ message: "User not authorized" });
		}

		return response.status(err.response.status).json({ message: err?.response?.data || "Unexpected error on third party server" });
	}

	if(err instanceof Prisma.PrismaClientKnownRequestError) {
		return response.status(400).json({ message: err?.message || "Unexpected error on database" });
	}

	if(err instanceof Prisma.PrismaClientInitializationError) {
		return response.status(400).json({ message: "Error on database inicialization" });
	}

	return response.status(500).json({
		message: "Internal server error",
	});
}
