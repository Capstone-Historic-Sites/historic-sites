import {Router} from "express";
import {getAllTagsController} from "../controllers/tag.controller";
import {getHistoricSiteTagsByHistoricSiteIdController} from "../controllers/tag.controller";

export const tagRouter = Router()

tagRouter.route("/")
    .get(getAllTagsController)

tagRouter.route("/:misquoteId")
    .get(getHistoricSiteTagsByHistoricSiteIdController)
//.put(udpateMisquote)
//.delete(deleteMisquote)


tagRouter.route("/misquoteFoo/:misquoteFoo")

