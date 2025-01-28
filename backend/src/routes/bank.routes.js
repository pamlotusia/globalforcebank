import { Router } from "express";
import { BankAccount } from "../controllers/BankAccount.js";

export const bankRoutes = Router();
const bankController = new BankAccount();

// bankRoutes.get("/", bankController.index);
bankRoutes.post("/", bankController.create);
bankRoutes.get("/", bankController.index);
