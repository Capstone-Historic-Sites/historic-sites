import {Router} from 'express'
import {
    deleteHistoricSiteController,
    getAllHistoricSitesController,
    getHistoricSiteByHistoricSiteIdController,
    getHistoricSiteByProfileIdController,
    getHistoricSiteByTagIdController,
    getHistoricSiteBySearchController,
    postHistoricSiteController,
    putHistoricSiteController
} from '../controllers/historic-site.controller'
import {isLoggedIn} from '../controllers/isLoggedIn.controller'
import {asyncValidatorController} from '../controllers/asyncValidator.controller'
import {
    historicSiteIdValidator,
    historicSiteProfileIdValidator,
    historicSiteTagTagIdValidator,
    historicSiteSearchValidator,
    postHistoricSiteValidator,
    putHistoricSiteValidator
} from '../validators/historic-site.validator'

const {checkSchema} = require('express-validator')

export const historicSiteRouter = Router()

historicSiteRouter.route('/')
    .get(getAllHistoricSitesController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(postHistoricSiteValidator)), postHistoricSiteController)

historicSiteRouter.route('/:historicSiteId')
    .get(asyncValidatorController(checkSchema(historicSiteIdValidator)), getHistoricSiteByHistoricSiteIdController)
    .put(isLoggedIn, asyncValidatorController(checkSchema(putHistoricSiteValidator)), putHistoricSiteController)
    .delete(isLoggedIn, asyncValidatorController(checkSchema(historicSiteIdValidator)), deleteHistoricSiteController)

historicSiteRouter.route('/profileId/:historicSiteProfileId')
    .get(asyncValidatorController(checkSchema(historicSiteProfileIdValidator)), getHistoricSiteByProfileIdController)

historicSiteRouter.route('/tagId/:tagId')
    .get(asyncValidatorController(checkSchema(historicSiteTagTagIdValidator)), getHistoricSiteByTagIdController)

historicSiteRouter.route('/search/:search')
    .get(asyncValidatorController(checkSchema(historicSiteSearchValidator)), getHistoricSiteBySearchController)
