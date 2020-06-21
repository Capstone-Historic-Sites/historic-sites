import {Router} from 'express'
import {
    postImageController,
    deleteImageController,
    getImageByHistoricSiteIdController
} from '../controllers/image.controller'
import {imageUploader} from "../lib/multer";
import {asyncValidatorController} from '../controllers/asyncValidator.controller'
import {
    imageHistoricSiteIdValidator,
    imageIdValidator,
    postImageValidator
} from '../validators/image.validator'

const {checkSchema} = require('express-validator')

export const imageRouter = Router()

imageRouter.route('/')
    .post(imageUploader, asyncValidatorController(checkSchema(postImageValidator)), postImageController)

imageRouter.route('/:imageId')

    .delete(asyncValidatorController(checkSchema(imageIdValidator)),deleteImageController)

imageRouter.route('/historic-site/:imageHistoricSiteId')
    .get(asyncValidatorController(checkSchema(imageHistoricSiteIdValidator)),getImageByHistoricSiteIdController)

