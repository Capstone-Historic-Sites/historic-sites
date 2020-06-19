import { Router } from 'express'
import { signInController } from '../controllers/sign-in.controller'
import { asyncValidatorController } from '../controllers/asyncValidator.controller'
import { signInValidator } from '../validators/sign-in.validator'

const {checkSchema} = require('express-validator')

export const signInRouter = Router()

signInRouter.route('/')
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController);