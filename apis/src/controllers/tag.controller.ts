import {Request, Response, NextFunction} from 'express';
import {Status} from '../../utils/interfaces/status'
import {selectAllTags} from '../../utils/tag/selectAllTags'
import {selectHistoricSiteTagsByHistoricSiteId} from "../../utils/tag/selectHistoricSiteTagsByHistoricSiteId";
import {insertHistoricSiteTag} from "../../utils/tag/insertHistoricSiteTag";
import {HistoricSiteTag} from "../../utils/interfaces/historic-site-tag";

export async function getAllTagsController(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await selectAllTags()
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getHistoricSiteTagsByHistoricSiteIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const {historicSiteId} = req.params
        const data = await selectHistoricSiteTagsByHistoricSiteId(historicSiteId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function postHistoricSiteTagController(req: Request, res: Response, next: NextFunction) {
    try {
        const {historicSiteTagHistoricSiteId, historicSiteTagTagId} = req.body
        const historicSiteTag: HistoricSiteTag = {historicSiteTagHistoricSiteId, historicSiteTagTagId}
        const result = await insertHistoricSiteTag(historicSiteTag)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}