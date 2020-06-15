import {NextFunction, Request, Response} from "express";
import {Status} from "../../utils/interfaces/status";
import {TravelList} from "../../utils/interfaces/travel-list";
import {insertTravelList} from "../../utils/travel-list/insertTravelList";
import {deleteTravelList} from "../../utils/travel-list/deleteTravelList";
import {updateTravelList} from "../../utils/travel-list/updateTravelList";
import {selectTravelListByForeignKeys} from '../../utils/travel-list/selectTravelListByForeignKeys'
import {validationResult} from 'express-validator';


export async function postTravelListController(req: Request, res: Response, next: NextFunction) {
    try {
        const {travelListHistoricSiteId, travelListRank} = req.body
        const travelList: TravelList = {travelListProfileId: null, travelListHistoricSiteId, travelListDateAdded:null, travelListRank}
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

        const {travelListProfileId} = req.params;

        const result = await deleteTravelList(travelListProfileId);
        console.log(result)
        const status: Status = {status: 200, data: null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function updateTravelListController(req: Request, res: Response, next: NextFunction) {
    try {
        const {travelListHistoricSiteId, travelListRank} = req.body
        const travelList: TravelList = {travelListProfileId: null, travelListHistoricSiteId, travelListDateAdded:null, travelListRank}
        const result = await updateTravelList(travelList)
        console.log(result)
        const status: Status = {status: 200, data:null, message: result}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}


export async function selectTravelListByForeignKeysController(req: Request, res: Response, next: NextFunction) {
    try {
        const {travelListProfileId} = req.params
        const result = await selectTravelListByForeignKeys(travelListProfileId)
        const status: Status = {status: 200, data: null, message: null}
        return res.json(status)
    } catch (error) {
        console.log(error)
    }
}