import {Router} from "express";
import {
        getProfileByProfileIdController,
        postProfileController,
        putProfileController,
        deleteProfileController,
        getProfileByProfileEmailController
} from "../controllers/profile.controller";

export const ProfileRoute = Router()

ProfileRoute.route("/")
    .post(postProfileController)

ProfileRoute.route("/:profileId")
    .get(getProfileByProfileIdController)
    .put(putProfileController)
    .delete(deleteProfileController)

ProfileRoute.route("/profileEmail/:profileEmail")
    .get(getProfileByProfileEmailController)
