import {Router} from 'express';
import {
    postImageController,
    deleteImageController,
    selectImageByHistoricSiteIdController
} from '../controllers/image.controller';


export const ImageRoute = Router()

ImageRoute.route("/")
    .post(postImageController)

ImageRoute.route("/:imageId")

    .delete(deleteImageController)

ImageRoute.route('/historic-site/:historicSiteId')
    .get(selectImageByHistoricSiteIdController)

