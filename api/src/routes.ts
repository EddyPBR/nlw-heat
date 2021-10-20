import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { EnsureAuthenticated } from "@middlewares/EnsureAuthenticated";

import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateMessageController } from "@controllers/CreateMessageController";
import { GetLast3MessagesController } from "@controllers/GetLast3MessagesController";
import { ProfileUserController } from "@controllers/ProfileUserController";

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

router.post("/authenticate", celebrate({
  body: {
    code: Joi.string().required()
  }
}),new AuthenticateUserController().handle);

router.post("/messages", celebrate({
  body: {
    message: Joi.string().required()
  }
}),EnsureAuthenticated, new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessagesController().handle);

router.get("/profile", EnsureAuthenticated, new ProfileUserController().handle);

export { router };
