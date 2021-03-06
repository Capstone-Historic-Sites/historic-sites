import {NextFunction, Request, Response} from 'express'
import {Status} from '../../utils/interfaces/status'
import {Profile} from '../../utils/interfaces/profile'
import {updateProfile} from '../../utils/profile/updateProfile'
import {deleteProfile} from '../../utils/profile/deleteProfile'
import {selectProfileByProfileEmail} from '../../utils/profile/selectProfileByProfileEmail'
import {selectProfileByProfileId} from '../../utils/profile/selectProfileByPrimaryKey'
import {setHash} from '../../utils/auth.utils'


export async function getProfileByProfileIdController(req: Request, res: Response, next: NextFunction) {
        try {
            const profile: Profile = req.session?.profile
            const profileId = <string> profile.profileId
            const data = await selectProfileByProfileId(profileId)
            const status: Status = {status: 200, data, message: null}
            return res.json(status)
        } catch (error) {
            console.log(error)
        }
}

export async function putProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const profileSession: Profile = req.session?.profile
        const profileId = <string> profileSession.profileId
        const {profileEmail, profileName, profileOrganization, profilePassword} = req.body
        const profileHash = await setHash(profilePassword)
        const profile: Profile = {profileId, profileActivationToken: null, profileDateAdded: null, profileEmail, profileHash, profileIsAdmin: false, profileName, profileOrganization}
        const result = await updateProfile(profile)
        return res.json({status: 200, data: null, message: result})
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const profile: Profile = req.session?.profile
        const profileId = <string> profile.profileId
        const result = await deleteProfile(profileId)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getProfileByProfileEmailController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileEmail} = req.params
        const data = await selectProfileByProfileEmail(profileEmail)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}




