import {Router} from "express";
import {getAllTagsController} from "../controllers/tag.controller";
import {getHistoricSiteTagsByHistoricSiteIdController} from "../controllers/tag.controller";
import {postHistoricSiteTagController} from "../controllers/tag.controller";
import {asyncValidatorController} from "../controllers/asyncValidator.controller";
const {checkSchema} = require ("express-validator");
import {postTagValidator, historicSiteTagHistoricSiteIdValidator} from "../validators/tag.validator";


export const tagRouter = Router()

tagRouter.route("/")
    .get(getAllTagsController)
    .post(asyncValidatorController(checkSchema(postTagValidator)), postHistoricSiteTagController)

tagRouter.route("/:historicSiteId")
    .get(asyncValidatorController(checkSchema(historicSiteTagHistoricSiteIdValidator)), getHistoricSiteTagsByHistoricSiteIdController)


