import {Router} from 'express';
import {
    postTravelListController,
    deleteTravelListController,
    updateTravelListController,
    selectTravelListByForeignKeysController
} from '../controllers/travel-list.controller';


export const TravelListRoute = Router()

TravelListRoute.route('/')
    .post(postTravelListController)

TravelListRoute.route('/:travelListProfileId')
    .get(selectTravelListByForeignKeysController)
    .put(updateTravelListController)


TravelListRoute.route('/:historicSiteId')
    .delete(deleteTravelListController)

TravelListRoute.route('/')