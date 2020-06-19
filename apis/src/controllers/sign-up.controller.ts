import { NextFunction, Request, Response } from 'express'
import { setActivationToken, setHash } from '../../utils/auth.utils'
import { insertProfile } from '../../utils/profile/insertProfile'
import { Profile } from '../../utils/interfaces/profile'
import { Status } from '../../utils/interfaces/status'
import MailComposer from 'nodemailer/lib/mail-composer'
const mailgun = require('mailgun-js')

export async function signUpController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileEmail, profileName, profileOrganization, profilePassword} = req.body
        const profileHash = await setHash(profilePassword)
        const profileActivationToken = setActivationToken()
        const basePath = `${req.protocol}://${req.get('host')}${req.originalUrl}/activation/${profileActivationToken}`

        const message = `<h2>Welcome to Historic Sites.</h2>
        <p>In order to start searching and posting for sites you must confirm your account.</p>
        <p><a href="${basePath}">Confirm Account</a></p>`

        const mailgunMessage = {
            from: `Mailgun Sandbox <postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: "Historic Sites Account Activation",
            text: 'Welcome to Historic Sites',
            html: message
        }

        const profile: Profile = {profileId: null, profileActivationToken, profileDateAdded: null, profileEmail, profileHash, profileIsAdmin: false, profileName, profileOrganization}
        const result = await insertProfile(profile)

        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error: any, message: Buffer) => {
            const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN})
            const compiledEmail = {
                to: profileEmail,
                message: message.toString('ascii')
            }
            const status: Status = {
                status: 200,
                message: result,
                data: null
            }
            mg.messages().sendMime(compiledEmail, (sendError: any, body: any) => {
                if (sendError) {
                    console.log(sendError)
                    //return sendError
                }
                return res.json(status)
            })
        })

    } catch(error) {
        const status: Status = {
            status: 400,
            message: error.message,
            data: null
        }
        return res.json(status)
    }
}
