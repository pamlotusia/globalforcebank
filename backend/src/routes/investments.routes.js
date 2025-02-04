import { Router } from "express";
import { InvestmentsController } from "../controllers/InvestmentsController.js";

import multer from "multer";
import { storage } from "../configs/multerConfig.js";
const upload = multer({ storage });

export const investimentsRoutes = new Router();
const investmentsController = new InvestmentsController();

investimentsRoutes.post(
  "/",
  upload.fields([
    { name: "riscos_mercado", maxCount: 1 },
    { name: "riscos_liquidez", maxCount: 1 },
    { name: "riscos_tecnologicos", maxCount: 1 },
    { name: "riscos_regulatorios", maxCount: 1 },
    { name: "descricao_garantias", maxCount: 1 },
  ]),
  investmentsController.create
);
investimentsRoutes.get("/", investmentsController.index);
