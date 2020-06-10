import {Router} from 'express'
import {
    deleteHistoricSiteController,
    getAllHistoricSitesController
} from '../controllers/historic-site.controller'

export const historicSiteRouter = Router()

historicSiteRouter.route('/')
    .get(getAllHistoricSitesController)
    .delete(deleteHistoricSiteController)