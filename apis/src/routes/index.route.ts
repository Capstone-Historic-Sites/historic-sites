import {Router} from "express"
import {indexController} from '../controllers/index.controller'

export const indexRouter = Router()

indexRouter.route('/')
    .get(indexController)
