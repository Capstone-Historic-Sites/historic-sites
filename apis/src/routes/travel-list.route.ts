import {Router} from 'express';
import {
    postTravelListController,
    deleteTravelListController,
    putTravelListController,
    getTravelListByForeignKeysController
} from '../controllers/travel-list.controller';
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
import {travelListIdsValidator, travelListValidator} from "../validators/travel-list.validator";

const {checkSchema} = require("express-validator");

export const travelListRoute = Router()

travelListRoute.route('/')
    .post(asyncValidatorController(checkSchema(travelListValidator)),postTravelListController)
    .put(asyncValidatorController(checkSchema(travelListValidator)),putTravelListController)


travelListRoute.route('/travelListProfileId/:travelListProfileId/travelListHistoricSiteId/:travelListHistoricSiteId')
    .delete(asyncValidatorController(checkSchema(travelListIdsValidator)),deleteTravelListController)
    .get(asyncValidatorController(checkSchema(travelListIdsValidator)),getTravelListByForeignKeysController)
