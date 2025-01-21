import { Router } from "express";
import { EmissorController } from "../controllers/EmissorController.js";

export const emitterRoutes = Router();
const emitterController = new EmissorController();

emitterRoutes.get("/", emitterController.index);
emitterRoutes.post("/", emitterController.create);
