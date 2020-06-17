import {Router} from "express";
import {
        getProfileByProfileIdController,
        postProfileController,
        putProfileController,
        deleteProfileController,
        getProfileByProfileEmailController,
        getProfileByProfileActivationTokenController
} from "../controllers/profile.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";;
import {profileValidator} from "../validators/profile.validator";
import {check,param} from "express-validator";

const { checkSchema } = require{'express-validator'};

export const ProfileRoute = Router()

ProfileRoute.route("/signup")
    .post(postProfileController)

ProfileRoute.route("/:profileId")
    .get(getProfileByProfileIdController)
    .put(putProfileController)
    .delete(deleteProfileController)

ProfileRoute.route("/profileEmail/:profileEmail")
    .get(getProfileByProfileEmailController)

ProfileRoute.route("/profileActivationToken/:profileActivationToken")
    .get(getProfileByProfileActivationTokenController)