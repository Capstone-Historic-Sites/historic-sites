import {NextFunction, Request, Response} from 'express';
import {Status} from '../../utils/interfaces/status';
import {Image} from '../../utils/interfaces/image';
import {insertImage} from '../../utils/image/insertImage';
import {deleteImage} from '../../utils/image/deleteImage';
import {selectImageByHistoricSiteId} from '../../utils/image/selectImageByHistoricSiteId';


export async function postImageController(req: Request, res: Response, next: NextFunction) {
    try {
        const {imageHistoricSiteId, imageName, imagePath} = req.body
        const image: Image = {imageId: null, imageHistoricSiteId, imageDateAdded:null, imageName, imagePath}
        const result = await insertImage(image)
        console.log(result)
        const status: Status = {status: 200, data:null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function deleteImageController(req: Request, res: Response, next: NextFunction) {
    try {

        const {imageId} = req.params;

        const result = await deleteImage(imageId);
        console.log(result)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}
export async function selectImageByHistoricSiteIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const {imageId} = req.params
        const result = await selectImageByHistoricSiteId(imageId)
        const status: Status = {status: 200, data: null, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}