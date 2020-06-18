import {Router} from 'express';
import {
    postImageController,
    deleteImageController,
    getImageByHistoricSiteIdController
} from '../controllers/image.controller';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {
    imageHistoricSiteIdValidator,
    imageIdValidator,
    postImageValidator
} from "../validators/image.validator";

const {checkSchema} = require("express-validator");

export const imageRoute = Router()

imageRoute.route("/")
    .post(asyncValidatorController(checkSchema(postImageValidator)), postImageController)

imageRoute.route("/:imageId")

    .delete(asyncValidatorController(checkSchema(imageIdValidator)),deleteImageController)

imageRoute.route('/historic-site/:imageHistoricSiteId')
    .get(asyncValidatorController(checkSchema(imageHistoricSiteIdValidator)),getImageByHistoricSiteIdController)

