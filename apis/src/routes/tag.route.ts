import {Router} from "express";
import {getAllTagsController} from "../controllers/tag.controller";
import {getHistoricSiteTagsByHistoricSiteIdController} from "../controllers/tag.controller";
import {postHistoricSiteTagController} from "../controllers/tag.controller";

export const tagRouter = Router()

tagRouter.route("/")
    .get(getAllTagsController)
    .post(postHistoricSiteTagController)

tagRouter.route("/:historicSiteId")
    .get(getHistoricSiteTagsByHistoricSiteIdController)


