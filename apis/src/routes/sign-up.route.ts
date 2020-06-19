import { Router } from 'express'
import { asyncValidatorController } from '../controllers/asyncValidator.controller'
import { signUpValidator } from '../validators/sign-up.validator'
import { signUpController } from '../controllers/sign-up.controller'
import { param } from 'express-validator'
import { activationController } from '../controllers/activation.controller'

const { checkSchema } = require('express-validator')

export const signUpRouter = Router()

signUpRouter.route("/")
    .post(asyncValidatorController(checkSchema(signUpValidator)),signUpController)

signUpRouter.route('/activation/:activation')
    .get(asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]), activationController)
