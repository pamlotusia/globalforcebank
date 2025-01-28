import { Router } from "express";
import { EmissorController } from "../controllers/EmissorController.js";
import multer from "multer";

export const emitterRoutes = Router();
const emitterController = new EmissorController();

const storage = multer.diskStorage({
  distination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

emitterRoutes.get("/", emitterController.index);
emitterRoutes.post("/", upload.fields([
    { name: "risks_mercado", maxCount: 1 },
    { name: "risks_liquidez", maxCount: 1 },
    { name: "risks_tecnologicos", maxCount: 1 },
    { name: "risks_regulatorios", maxCount: 1 },
    { name: "risks_garantias", maxCount: 1 },
  ]),  emitterController.create);
