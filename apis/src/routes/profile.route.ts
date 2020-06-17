import {Router} from "express";
import {
        getProfileByProfileIdController,
        putProfileController,
        deleteProfileController,
        getProfileByProfileEmailController,
        getProfileByProfileActivationTokenController
} from "../controllers/profile.controller";

export const ProfileRoute = Router()

ProfileRoute.route("/:profileId")
    .get(getProfileByProfileIdController)
    .put(putProfileController)
    .delete(deleteProfileController)

ProfileRoute.route("/profileEmail/:profileEmail")
    .get(getProfileByProfileEmailController)

ProfileRoute.route("/profileActivationToken/:profileActivationToken")
    .get(getProfileByProfileActivationTokenController)