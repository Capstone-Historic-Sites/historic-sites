import { Router } from 'express';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {signupValidator} from "../validators/sign-up.validator";
import {signUpController} from "../controllers/sign-up.controller";
import {check, param} from "express-validator";
import {activationController} from "../controllers/activation.controller";

const { checkSchema } = require{'express-validator'};

export const SignupRouter = Router();
SignupRouter.route("/signup")
    .post(asyncValidatorController(checkSchema(signupValidator)),signUpController);
SignupRouter.route('/activation/:activation')
    .get(asyncValidatorController(param("activation", "invalid activation link").isHexadecimal().notEmpty()), activationController)
