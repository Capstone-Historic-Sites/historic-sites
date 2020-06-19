import {NextFunction, Request, Response} from 'express'
import {selectProfileByProfileActivationToken} from '../../utils/profile/selectProfileByProfileActivationToken'
import {updateProfile} from '../../utils/profile/updateProfile'
import {Profile} from '../../utils/interfaces/profile'

export async function activationController(req: Request, res: Response, next: NextFunction) {
        const {activation} = req.params
        try {
            const profile = await selectProfileByProfileActivationToken(activation)
            const activationFailed = () => res.json({
                status: 400,
                data: null,
                message: "Account activation has failed. Have you already activated this account?"
            })
            const activationSucceeded = async (profile: Profile) => {
                const updatedProfile = {...profile, profileActivationToken: null}
                await updateProfile(updatedProfile)
                return res.json({
                    status: 200,
                    data: null,
                    message: "Account activation was successful"
                })
            }
            profile ? await activationSucceeded(profile) : activationFailed()
        } catch (error) {
            return res.json({status: 500, data: null, message: error.message})
        }
}