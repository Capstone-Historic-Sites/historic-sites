import { Router } from "express";
import { signInValidator } from "../validators/sign-in.validator";
import { signInController } from "../controllers/sign-in.controller";
import { asyncValidatorController } from "../controllers/asyncValidator.controller";
import { checkSchema } from "express-validator";

export const SignInRouter = Router();

SignInRouter.route('/')
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController);