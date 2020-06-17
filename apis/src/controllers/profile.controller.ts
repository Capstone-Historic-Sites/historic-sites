import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Profile} from "../../utils/interfaces/profile";
import {updateProfile} from "../../utils/profile/updateProfile";
import {deleteProfile} from "../../utils/profile/deleteProfile";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByPrimaryKey";
import {selectProfileByProfileEmail} from "../../utils/profile/selectProfileByProfileEmail";
import {selectProfileByProfileActivationToken} from "../../utils/profile/selectProfileByProfileActivationToken";


export async function getProfileByProfileIdController(req: Request, res: Response, next: NextFunction) {
        try {
            const {profileId} = req.params;

            const data = await selectProfileByProfileId(profileId);
            const status: Status = {status: 200, data, message: null}
            return res.json(status)
        } catch (error) {
                console.log(error)
        }
}

export async function putProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileActivationToken, profileEmail, profileHash, profileName} = req.body
        //I took out the Token and Hash from the updateProfile function
        const {profileId} = req.params;
        const profile: Profile = {profileId, profileActivationToken, profileDateAdded: null, profileEmail, profileHash, profileIsAdmin: false, profileName, profileOrganization: " "
        };
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
        const result = await deleteProfile(profileId)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getProfileByProfileEmailController(req: Request, res: Response, next: NextFunction) {
        try {
                const {profileEmail} = req.params;
                const data = await selectProfileByProfileEmail(profileEmail)
                const status: Status = {status: 200, data, message: null}
                return res.json(status)
        } catch (error) {
                console.log(error)
        }
}

export async function getProfileByProfileActivationTokenController(req: Request, res: Response, next: NextFunction) {
        try {
                const {profileActivationToken} = req.params;
                const data = await  selectProfileByProfileActivationToken(profileActivationToken)
                const status: Status = {status: 200, data, message: null}
                return  res.json(status)
        } catch (error) {
                console.log(error)
        }
}




