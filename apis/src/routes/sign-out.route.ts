import { Router } from "express";
import { signOutController } from "../controllers/sign-out.controller";

export const signOutRouter = Router()

signOutRouter.route('/')
    .get(signOutController);