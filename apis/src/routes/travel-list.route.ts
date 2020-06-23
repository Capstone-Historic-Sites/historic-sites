import {Router} from 'express'
import {
    postTravelListController,
    deleteTravelListController,
    putTravelListController,
    getTravelListByForeignKeysController,
    getTravelListByProfileId
} from '../controllers/travel-list.controller'
import {isLoggedIn} from '../controllers/isLoggedIn.controller'
import {asyncValidatorController} from '../controllers/asyncValidator.controller'
import {travelListProfileIdValidator, travelListIdsValidator, travelListValidator} from '../validators/travel-list.validator'

const {checkSchema} = require("express-validator");

export const travelListRouter = Router()

travelListRouter.route('/')
    .post(isLoggedIn, asyncValidatorController(checkSchema(travelListValidator)),postTravelListController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(travelListValidator)),putTravelListController)


travelListRouter.route('/travelListProfileId/:travelListProfileId/travelListHistoricSiteId/:travelListHistoricSiteId')
    .delete(isLoggedIn, asyncValidatorController(checkSchema(travelListIdsValidator)),deleteTravelListController)
    .get(asyncValidatorController(checkSchema(travelListIdsValidator)),getTravelListByForeignKeysController)

travelListRouter.route('travelListProfileId/:travelListProfileId')
    .get(isLoggedIn, asyncValidatorController(checkSchema(travelListProfileIdValidator)), getTravelListByProfileId)