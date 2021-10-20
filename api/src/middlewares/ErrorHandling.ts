import type { Request, Response, NextFunction } from "express";
import { ApplicationException } from "@exceptions/ApplicationException";
import axios from "axios";
import { Prisma } from "@prisma/client";
import { isCelebrateError } from "celebrate";

export function ErrorHandling (
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof ApplicationException) {
    return response.status(err.statusCode).json({ message: err.message });
  }

  if(isCelebrateError(err)) {
    const errorDetail = err.details.get("body").details[0];
    const formatedError = errorDetail.message.replace(/"/g, "");

    return response.status(400).json({
      message: formatedError,
    });
  }

  if(axios.isAxiosError(err)) {
    if(err.response.status === 401) {
      return response.status(401).json({ message: "User not authorized" });
    };

    return response.status(err.response.status).json({ message: err?.response?.data || "Unexpected error on third party server" });
  }

  if(err instanceof Prisma.PrismaClientKnownRequestError) {
    return response.status(400).json({ message: err?.message || "Unexpected error on database" });
  }

  return response.status(500).json({
    message: "Internal server error",
  });
}
