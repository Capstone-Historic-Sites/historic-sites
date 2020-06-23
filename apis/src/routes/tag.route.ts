import {Router} from "express";
import {
    getAllTagsController,
    getHistoricSiteTagsByHistoricSiteIdController,
    postHistoricSiteTagController
} from '../controllers/tag.controller'
import {asyncValidatorController} from '../controllers/asyncValidator.controller'
import {isLoggedIn} from '../controllers/isLoggedIn.controller'
const {checkSchema} = require ('express-validator')
import {postTagValidator, historicSiteTagHistoricSiteIdValidator} from '../validators/tag.validator'


export const tagRouter = Router()

tagRouter.route("/")
    .get(getAllTagsController)
    .post(isLoggedIn, asyncValidatorController(checkSchema(postTagValidator)), postHistoricSiteTagController)

tagRouter.route("/:historicSiteId")
    .get(asyncValidatorController(checkSchema(historicSiteTagHistoricSiteIdValidator)), getHistoricSiteTagsByHistoricSiteIdController)


