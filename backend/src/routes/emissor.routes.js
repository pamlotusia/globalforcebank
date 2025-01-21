import { Router } from "express";
import { EmissorController } from "../controllers/EmissorController.js";


export const emissorRoutes = Router()
const emissorController  =  new EmissorController()

emissorRoutes.post('/', emissorController.create)
emissorRoutes.get('/', emissorController.index)
