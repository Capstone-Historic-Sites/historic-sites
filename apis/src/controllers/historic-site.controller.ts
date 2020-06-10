import {Request, Response, NextFunction} from 'express'
import {Status} from '../../utils/interfaces/status'
import {HistoricSite} from '../../utils/interfaces/historic-site'
import {deleteHistoricSite} from '../../utils/historic-sites/deleteHistoricSite'
import {insertHistoricSite} from '../../utils/historic-sites/insertHistoricSite'
import {searchHistoricSite} from '../../utils/historic-sites/searchHistoricSite'
import {selectAllHistoricSites} from '../../utils/historic-sites/selectAllHistoricSites'
import {selectHistoricSiteByHistoricSiteId} from '../../utils/historic-sites/selectHistoricSiteByHistoricSiteId'
import {selectHistoricSiteByProfileId} from '../../utils/historic-sites/selectHistoricSiteByProfileId'
import {selectHistoricSiteByTagId} from '../../utils/historic-sites/selectHistoricSiteByTagId'
import {updateHistoricSite} from '../../utils/historic-sites/updateHistoricSite'

export async function deleteHistoricSiteController(req: Request, res: Response, next: NextFunction) {
    try {
        const {historicSiteId} = req.body
        const result = await deleteHistoricSite(historicSiteId)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getAllHistoricSitesController(req: Request, res: Response, next: NextFunction) {
    try {
        const data = await selectAllHistoricSites()
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}