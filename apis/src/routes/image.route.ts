import {Router} from 'express';
import {
    postImageController,
    deleteImageController,
    selectImageByHistoricSiteIdController
} from '../controllers/image.controller';


export const imageRoute = Router()

imageRoute.route("/")
    .post(postImageController)

imageRoute.route("/:imageId")

    .delete(deleteImageController)

imageRoute.route('/historic-site/:historicSiteId')
    .get(selectImageByHistoricSiteIdController)

