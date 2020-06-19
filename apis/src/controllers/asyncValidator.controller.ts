import { Request, Response, NextFunction } from 'express'
const { validationResult } = require('express-validator')

export const asyncValidatorController = (validations : any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        //console.log(req.body)
        await Promise.all(validations.map((validation : any) => validation.run(req)))

        const errors = validationResult(req);
        //console.log(errors)
        if (errors.isEmpty()) {
            return next()
        }
        res.json({ status: 406, data: null, message: errors.array()[0].msg })
    }
}
