import {Router} from 'express'
import {
    uploadImageController,
    postImageController,
    deleteImageController,
    getAllImagesController,
    getImageByHistoricSiteIdController
} from '../controllers/image.controller'
import {isLoggedIn} from '../controllers/isLoggedIn.controller'
import {imageUploader} from "../lib/multer";
import {asyncValidatorController} from '../controllers/asyncValidator.controller'
import {
    imageHistoricSiteIdValidator,
    imageIdValidator,
    postImageValidator
} from '../validators/image.validator'

const {checkSchema} = require('express-validator')

export const imageRouter = Router()

imageRouter.route('/upload')
    .post(isLoggedIn, imageUploader, uploadImageController)

imageRouter.route('/')
    .get(getAllImagesController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(postImageValidator)), postImageController)

imageRouter.route('/:imageId')
    .delete(isLoggedIn, asyncValidatorController(checkSchema(imageIdValidator)),deleteImageController)

imageRouter.route('/historic-site/:imageHistoricSiteId')
    .get(asyncValidatorController(checkSchema(imageHistoricSiteIdValidator)),getImageByHistoricSiteIdController)

