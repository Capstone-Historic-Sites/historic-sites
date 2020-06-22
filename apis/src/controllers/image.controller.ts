import {NextFunction, Request, Response} from 'express'
import {Status} from '../../utils/interfaces/status'
import {Image} from '../../utils/interfaces/image'
import {insertImage} from '../../utils/image/insertImage'
import {deleteImage} from '../../utils/image/deleteImage'
import {selectImageByHistoricSiteId} from '../../utils/image/selectImageByHistoricSiteId'
import {uploadToCloudinary} from '../lib/cloudinary'

export async function postImageController(req: Request, res: Response, next: NextFunction) {
    try {
        const {imageHistoricSiteId, imageName} = req.body
        const imagePath = await (uploadToCloudinary(req))
        console.log(imagePath)
        const image: Image = {imageId: null, imageHistoricSiteId, imageDateAdded:null, imageName, imagePath}
        const result = await insertImage(image)
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
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}
export async function getImageByHistoricSiteIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const {imageHistoricSiteId} = req.params
        const data = await selectImageByHistoricSiteId(imageHistoricSiteId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}