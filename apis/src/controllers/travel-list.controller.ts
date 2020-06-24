import {NextFunction, Request, Response} from 'express'
import {Status} from '../../utils/interfaces/status'
import {TravelList} from '../../utils/interfaces/travel-list'
import {Profile} from '../../utils/interfaces/profile'
import {insertTravelList} from '../../utils/travel-list/insertTravelList'
import {deleteTravelList} from '../../utils/travel-list/deleteTravelList'
import {updateTravelList} from '../../utils/travel-list/updateTravelList'
import {selectTravelListByForeignKeys} from '../../utils/travel-list/selectTravelListByForeignKeys'
import {selectTravelListByProfileId} from '../../utils/travel-list/selectTravelListByProfileId'
import {selectTravelListCount} from '../../utils/travel-list/selectTravelListCount'

export async function postTravelListController(req: Request, res: Response, next: NextFunction) {
    try {
        const profile: Profile = req.session?.profile
        const travelListProfileId = <string> profile.profileId
        const {travelListHistoricSiteId} = req.body
        const count = await selectTravelListCount(travelListProfileId)
        console.log(count)
        const travelListRank = 4
        const travelList: TravelList = {travelListProfileId, travelListHistoricSiteId, travelListDateAdded: null, travelListRank}
        const result = await insertTravelList(travelList)
        console.log(result)
        const status: Status = {status: 200, data:null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function deleteTravelListController(req: Request, res: Response, next: NextFunction) {
    try {
        const profile: Profile = req.session?.profile
        const travelListProfileId = <string> profile.profileId
        const {travelListHistoricSiteId} = req.params
        const result = await deleteTravelList(travelListProfileId, travelListHistoricSiteId);
        console.log(result)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function putTravelListController(req: Request, res: Response, next: NextFunction) {
    try {
        const profile: Profile = req.session?.profile
        const travelListProfileId = <string> profile.profileId
        const {travelListHistoricSiteId, travelListRank} = req.body
        const travelList: TravelList = {travelListProfileId, travelListHistoricSiteId, travelListDateAdded:null, travelListRank}
        const result = await updateTravelList(travelList)
        console.log(result)
        const status: Status = {status: 200, data:null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getTravelListByForeignKeysController(req: Request, res: Response, next: NextFunction) {
    try {
        const profile: Profile = req.session?.profile
        const travelListProfileId = <string> profile.profileId
        const {travelListHistoricSiteId} = req.params
        const data = await selectTravelListByForeignKeys(travelListProfileId, travelListHistoricSiteId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}

export async function getTravelListByProfileId(req: Request, res: Response, next: NextFunction) {
    try {
        const profile: Profile = req.session?.profile
        const travelListProfileId = <string> profile.profileId
        const data = await selectTravelListByProfileId(travelListProfileId)
        const status: Status = {status: 200, data, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}