import {NextFunction, Response, Request} from 'express';
import  "express-session";
import passport from 'passport';
import passportLocal, { Strategy } from 'passport-local';

import uuid from "uuid";
import {generateJwt, validatePassword} from "../../utils/auth.utils";
import {Profile} from "../../utils/interfaces/profile";
import {selectProfileByProfileEmail} from "../../utils/profile/selectProfileByProfileEmail";

export async function signInController(req: Request, res: Response, next: NextFunction) {

    try {

        const {profilePassword} = req.body;
        passport.authenticate(
            'local',
            {session: false},
            async (err: any, passportUser: Profile) => {
                const {profileId, profileEmail} = passportUser;
                const signature : string = uuid();
                const authorization : string = generateJwt({profileId, profileEmail}, signature);


                const signInFailed = (message: string) => res.json({
                    status: 400,
                    data: null,
                    message
                });

                const signInSuccessful = () => {

                    // commented out for testing purposes
                    // if(passportUser.profileActivationToken !== null) {
                    // 	signInFailed("please activate your account")
                    // }

                    if (req.session) {
                        req.session.profile = passportUser;
                        req.session.jwt = authorization;
                        req.session.signature = signature;
                    }

                    res.header({
                        authorization
                    });

                    return res.json({status: 200, data: null, message: "sign in successful"})
                };


                const isPasswordValid: boolean = passportUser && await validatePassword(passportUser.profileHash, profilePassword);

                return isPasswordValid ? signInSuccessful() : signInFailed("Invalid email or password");
            })(req, res, next)
    } catch (error) {
        return res.json({status: 500, data: null, message: error.message})
    }
}


const LocalStrategy = passportLocal.Strategy;

const passportStrategy : Strategy = new LocalStrategy(
    {
        usernameField: 'profileEmail',
        passwordField: "profilePassword"
    },
    async (email, password, done) => {
        try {

            const profile : Profile | undefined = await selectProfileByProfileEmail(email);

            return profile ? done(null, profile) : done(undefined, undefined, { message: 'Incorrect username or password'});
        }
        catch (error) {
            return done(error);
        }
    });

export const  passportMiddleware = passport.use(passportStrategy);