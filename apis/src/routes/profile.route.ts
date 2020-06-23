import {Router} from 'express'
import {
        getProfileByProfileIdController,
        putProfileController,
        deleteProfileController,
        getProfileByProfileEmailController,
} from '../controllers/profile.controller'
import {asyncValidatorController} from '../controllers/asyncValidator.controller'
import {
        profileEmailValidator,
        updateProfileValidator,
} from '../validators/profile.validator'
import { isLoggedIn } from '../controllers/isLoggedIn.controller'

const { checkSchema } = require('express-validator')

export const profileRouter = Router()

profileRouter.route('/:profileId')
    .get(getProfileByProfileIdController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(updateProfileValidator)), putProfileController)
    .delete(isLoggedIn, deleteProfileController)

profileRouter.route('/profileEmail/:profileEmail')
    .get(asyncValidatorController(checkSchema(profileEmailValidator)), getProfileByProfileEmailController)