import { Router } from "express";
import { celebrate, Joi } from "celebrate";

import { EnsureAuthenticated } from "@middlewares/EnsureAuthenticated";

import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateMessageController } from "@controllers/CreateMessageController";
import { ProfileUserController } from "@controllers/ProfileUserController";
import { GetMessagesController } from "@controllers/GetMessagesController";

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

router.get("/messages", celebrate({
  query: {
    limit: Joi.number().min(1).max(25)
  }
}), new GetMessagesController().handle);

router.get("/profile", EnsureAuthenticated, new ProfileUserController().handle);

export { router };
