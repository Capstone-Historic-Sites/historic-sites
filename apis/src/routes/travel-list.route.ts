import {Router} from 'express';
import {
    postTravelListController,
    deleteTravelListController,
    updateTravelListController,
    selectTravelListByForeignKeysController
} from '../controllers/travel-list.controller';


export const travelListRoute = Router()

travelListRoute.route('/')
    .post(postTravelListController)

travelListRoute.route('/:travelListProfileId')
    .get(selectTravelListByForeignKeysController)
    .put(updateTravelListController)


travelListRoute.route('/:historicSiteId')
    .delete(deleteTravelListController)

travelListRoute.route('/')