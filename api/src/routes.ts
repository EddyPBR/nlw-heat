import { Router } from "express";

import { EnsureAuthenticated } from "@middlewares/EnsureAuthenticated";

import { AuthenticateUserController } from "@controllers/AuthenticateUserController";
import { CreateMessageController } from "@controllers/CreateMessageController";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);


router.post("/messages", EnsureAuthenticated, new CreateMessageController().handle);

export { router };
