import {Router} from "express";
import {
        getProfileByProfileIdController,
        putProfileController,
        deleteProfileController, getProfileByProfileEmailController,
} from "../controllers/profile.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {
        updateProfileValidator,
        profileIdValidator,
} from "../validators/profile.validator";
import { isLoggedIn } from "../controllers/isLoggedIn.controller";

const { checkSchema } = require("express-validator");

export const ProfileRoute = Router()

ProfileRoute.route("/:profileId")
    .get(asyncValidatorController(checkSchema(profileIdValidator)), getProfileByProfileIdController)
    .put(asyncValidatorController(checkSchema(updateProfileValidator)), putProfileController)
    .delete(asyncValidatorController(checkSchema(profileIdValidator)), deleteProfileController)

ProfileRoute.route("/profileEmail/:profileEmail")
    .get(getProfileByProfileEmailController)