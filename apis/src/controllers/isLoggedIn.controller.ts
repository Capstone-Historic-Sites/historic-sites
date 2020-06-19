import {NextFunction, Request, Response} from 'express'
import {JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken'
import {Status} from '../../utils/interfaces/status'
import {Profile} from '../../utils/interfaces/profile'


export function isLoggedIn(req: Request, res: Response, next: NextFunction): any {

    let status : Status = {status: 400, message: 'Please Login', data: null}

    const sessionProfile  = (req : Request): Profile | undefined => req.session?.profile ?? undefined

    const signature = (req : Request) : string => req.session?.signature ?? 'no signature'

    const isSessionActive = (isProfileActive: Profile | undefined) : boolean => isProfileActive ? true : false

    const getJwtTokenFromHeader  = (headers: any): string => {
        return headers['authorization']
    }

    const unverifiedJwtToken: string = getJwtTokenFromHeader(req.headers)

    const isJwtValid: any = unverifiedJwtToken
        ? verify(
            unverifiedJwtToken,
            signature(req),
            {maxAge: "3hr"},
            (error: any, decoded: any) => error ? false : true
        )
        : false

    return isJwtValid && isSessionActive(sessionProfile(req)) ? next() : res.json(status)
}