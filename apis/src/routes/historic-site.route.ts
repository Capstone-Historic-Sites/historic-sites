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

export const historicSiteRouter = Router()

historicSiteRouter.route('/')
    .get(getAllHistoricSitesController)
    .post(postHistoricSiteController)

historicSiteRouter.route('/:historicSiteId')
    .get(getHistoricSiteByHistoricSiteIdController)
    .put(putHistoricSiteController)
    .delete(deleteHistoricSiteController)

historicSiteRouter.route('/profileId/:profileId')
    .get(getHistoricSiteByProfileIdController)

historicSiteRouter.route('/tagId/:tagId')
    .get(getHistoricSiteByTagIdController)

historicSiteRouter.route('/search')
    .get(getHistoricSiteBySearchController)