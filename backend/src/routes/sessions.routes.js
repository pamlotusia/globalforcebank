import { Router } from "express";
import { SessionController } from "../controllers/SessionController.js";

export const sessionRouter = new Router()
const sessionController = new SessionController()

sessionRouter.post('/', sessionController.create)