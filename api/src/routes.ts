import { Router } from "express";

import { EnsureAuthenticated } from "@middlewares/EnsureAuthenticated";

import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateMessageController } from "@controllers/CreateMessageController";

const router = Router();

router.get("/github", (request, response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  );
});

router.get("/signin/callback", (request, response) => {
  const { code } = request.query;

  return response.status(200).json(code);
});

router.post("/authenticate", new AuthenticateUserController().handle);

router.post("/messages", EnsureAuthenticated, new CreateMessageController().handle);

export { router };
