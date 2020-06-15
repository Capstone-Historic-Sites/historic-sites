import {Request, Response, NextFunction} from 'express'
import {Status} from '../../utils/interfaces/status'
import {HistoricSite} from '../../utils/interfaces/historic-site'
import {deleteHistoricSite} from '../../utils/historic-site/deleteHistoricSite'
import {insertHistoricSite} from '../../utils/historic-site/insertHistoricSite'
import {searchHistoricSite} from '../../utils/historic-site/searchHistoricSite'
import {selectAllHistoricSites} from '../../utils/historic-site/selectAllHistoricSites'
import {selectHistoricSiteByHistoricSiteId} from '../../utils/historic-site/selectHistoricSiteByHistoricSiteId'
import {selectHistoricSiteByProfileId} from '../../utils/historic-site/selectHistoricSiteByProfileId'
import {selectHistoricSiteByTagId} from '../../utils/historic-site/selectHistoricSiteByTagId'
import {updateHistoricSite} from '../../utils/historic-site/updateHistoricSite'

export async function deleteHistoricSiteController(req: Request, res: Response, next: NextFunction) {
    try {
        const {historicSiteId} = req.params
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

export async function getHistoricSiteByHistoricSiteIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const {historicSiteId} = req.params
        const data = await selectHistoricSiteByProfileId(historicSiteId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getHistoricSiteByProfileIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const {profileId} = req.params
        const data = await selectHistoricSiteByHistoricSiteId(profileId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getHistoricSiteByTagIdController(req: Request, res: Response, next: NextFunction) {
    try {
        const {tagId} = req.params
        const data = await selectHistoricSiteByTagId(tagId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getHistoricSiteBySearchController(req: Request, res: Response, next: NextFunction) {
    try {
        const {search} = req.body
        const data = await searchHistoricSite(search)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function postHistoricSiteController(req: Request, res: Response, next: NextFunction) {
    try {
        const {historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState} = req.body
        //TODO geocode address here for lat and long
        const historicSite: HistoricSite = {historicSiteId: null, historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded: null, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState}
        const result = await insertHistoricSite(historicSite)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function putHistoricSiteController(req: Request, res: Response, next: NextFunction) {
    try {
        const {historicSiteId} = req.params
        const {historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState} = req.body
        //TODO geocode address here for lat and long
        const historicSite: HistoricSite = {historicSiteId, historicSiteProfileId, historicSiteCost, historicSiteDate, historicSiteDateAdded, historicSiteDescription, historicSiteLat, historicSiteLong, historicSiteMunicipality, historicSiteName, historicSiteState}
        const result = await updateHistoricSite(historicSite)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}