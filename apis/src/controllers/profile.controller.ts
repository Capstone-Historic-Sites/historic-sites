import {NextFunction, Request, response, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {insertProfile} from "../../utils/profile/insertProfile";
import {updateProfile} from "../../utils/profile/updateProfile";
import {deleteProfile} from "../../utils/profile/deleteProfile";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByPrimaryKey";
import {Profile} from "../../utils/interfaces/profile";

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
export async function postProfileController(req: Request, res: Response, nextFunction: NextFunction) {
    try {
        const {profileActivationToken, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization} = req.body
        const profile: Profile = {profileId: null, profileActivationToken, profileDateAdded: null, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization}
        const result =await insertProfile(profile)
        return res.json({status: 200, data: null, message: result})
    } catch(error) {
        console.log(error)
    }

}
export async function putProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileId} = req.params;

        const result = await updateProfile(profileId)
        return  res.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }

}
export async function deleteProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileId} = req.params;

        const result = await deleteProfile(profileId)
        return res.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }

}




