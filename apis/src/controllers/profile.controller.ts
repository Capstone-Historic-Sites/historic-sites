import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Profile} from "../../utils/interfaces/profile";
import {insertProfile} from "../../utils/profile/insertProfile";
import {updateProfile} from "../../utils/profile/updateProfile";
import {deleteProfile} from "../../utils/profile/deleteProfile";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByPrimaryKey";

export async function getProfileByProfileIdController(req: Request, res: Response, next: NextFunction) {
        try {
            const {profileFoo} = req.params;

            const data = await selectProfileByProfileId(profileFoo);
            console.log(data)
            const status: Status = {status: 200, data, message: null}
            return res.json(status)
        } catch (error) {
                console.log(error)
        }
}
export async function postProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileActivationToken, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization} = req.body
        const profile: Profile = {profileId: null, profileActivationToken, profileDateAdded: null, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization}
        const result = insertProfile(profile)
        return res.json({status: 200, data: null, message: result})
    } catch(error) {
        console.log(error)
    }
}
export async function putProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileActivationToken, profileEmail, profileHash, profileName} = req.body
        const {profileId} = req.params;
        const profile: Profile = {profileId, profileActivationToken, profileDateAdded: null, profileEmail, profileHash,profileIsAdmin: false, profileName, profileOrganization: " "}
        const result = await updateProfile(profile)
        return  res.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}
export async function deleteProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        console.log(req.params)
        const {profileId} = req.params;
        const data = await deleteProfile(profileId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}




