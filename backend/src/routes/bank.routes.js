import { Router } from "express";
import { BankAccount } from "../controllers/BankAccount.js";

export const bankRoutes = Router();
const bankController = new BankAccount();

bankRoutes.post("/", bankController.create);
bankRoutes.get("/", bankController.index);
