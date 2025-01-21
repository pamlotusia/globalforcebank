import { Database } from "../database/database.js";

const database = new Database();

export class EmissorController {
  create(req, res) {
    const {
      nameSender,
      cnpj,
      adress,
      email,
      tel,
      category,
      cvmRegister,
      mainActivity,
    } = req.body;

    const emissor = {
      nameSender,
      cnpj,
      adress,
      email,
      tel,
      category,
      cvmRegister,
      mainActivity,
    };

    database.insert("emissor", emissor);

    return res.status(201).json({});
  }

  index(req, res) {
    return res.json({ message: "foi" });
  }
}
