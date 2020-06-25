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
import {travelListHistoricSiteIdValidator, travelListValidator} from '../validators/travel-list.validator'

const {checkSchema} = require("express-validator");

export const travelListRouter = Router()

travelListRouter.route('/')
    .get(isLoggedIn, getTravelListByProfileId)
    .post(isLoggedIn, asyncValidatorController(checkSchema(travelListValidator)),postTravelListController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(travelListValidator)),putTravelListController)


travelListRouter.route('/travelListHistoricSiteId/:travelListHistoricSiteId')
    .delete(isLoggedIn, asyncValidatorController(checkSchema(travelListHistoricSiteIdValidator)),deleteTravelListController)
    .get(isLoggedIn, asyncValidatorController(checkSchema(travelListHistoricSiteIdValidator)),getTravelListByForeignKeysController)