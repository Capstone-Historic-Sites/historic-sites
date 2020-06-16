import {Router} from 'express';
import {
    postTravelListController,
    deleteTravelListController,
    putTravelListController,
    getTravelListByForeignKeysController
} from '../controllers/travel-list.controller';


export const travelListRoute = Router()

travelListRoute.route('/')
    .post(postTravelListController)
    .put(putTravelListController)


travelListRoute.route('/travelListProfileId/:travelListProfileId/travelListHistoricSiteId/:travelListHistoricSiteId')
    .delete(deleteTravelListController)
    .get(getTravelListByForeignKeysController)
travelListRoute.route('/')