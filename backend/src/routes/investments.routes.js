import { Router } from "express";
import { InvestmentsController } from "../controllers/InvestmentsController";

export const investimentsRoutes = new Router()
const investmentsController = new InvestmentsController()

investimentsRoutes.post('/', investmentsController.create)

