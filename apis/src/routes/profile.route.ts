import {Router} from "express";
import {getProfileByProfileIdController,
        postProfileController,
        putProfileController,
        deleteProfileController} from "../controllers/profile.controller";

export const ProfileRoute = Router()

ProfileRoute.route("/")
    .post(postProfileController)

ProfileRoute.route("/:profileId")
    .get(getProfileByProfileIdController)
    .put(putProfileController)
    .delete(deleteProfileController)


