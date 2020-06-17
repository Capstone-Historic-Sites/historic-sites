import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {Profile} from "../../utils/interfaces/profile";
import {insertProfile} from "../../utils/profile/insertProfile";
import {updateProfile} from "../../utils/profile/updateProfile";
import {deleteProfile} from "../../utils/profile/deleteProfile";
import {selectProfileByProfileId} from "../../utils/profile/selectProfileByPrimaryKey";
import {setActivationToken, setHash} from "../../utils/auth.utils";
import {selectProfileByProfileEmail} from "../../utils/profile/selectProfileByProfileEmail";
import {selectProfileByProfileActivationToken} from "../../utils/profile/selectProfileByProfileActivationToken";
import MailComposer from "nodemailer/lib/mail-composer";
const mailgun = require("mailgun-js")

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

export async function postProfileController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileEmail, profileIsAdmin, profileName, profileOrganization, profilePassword} = req.body
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const basePath = `${req.protocol}://${req.get('host')}${req.originalUrl}/activation/${profileActivationToken}`

        const message = `<h2>Welcome to Historical Sites.</h2>
        <p>In order to start searching and posting for sites you must confirm your account</p>
        <p><a href="${basePath}">${basePath}</a></p>`

        const mailgunMessage = {
                from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
                to: profileEmail,
                subject: "Historical Sites Account Activation",
                text: 'test email text',
                html: message
        }
        const profile: Profile = {profileId: null, profileActivationToken, profileDateAdded: null, profileEmail, profileHash, profileIsAdmin, profileName, profileOrganization
        };
        const result = await insertProfile(profile)

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)
        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
            console.log(message.toString("ascii"))
            const compiledEmail = {
                to: profileEmail,
                message: message.toString("ascii")
            }
            const status: Status = {
                status: 200,
                message: "Profile successfully created please check your email.",
                data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                if (sendError) {
                    console.log(sendError);
                    return;
                }
                return res.json(status);
            });
        })

    } catch(error) {
            const status: Status = {
                status: 400,
                message: error.message,
                data: null
            };
            return res.json(status)
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




