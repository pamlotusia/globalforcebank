import { Database } from "../database/database.js";
const database = new Database();

export class EmissorController {
  async create(req, res) {
      // const { name, cnpj, adress, email, tel, category, cvm, principalActivity } = req.body;
      const { name, cnpj } = req.body;

      // const emitter = { name, cnpj, adress, email, tel, category, cvm, principalActivity };
      const emitter = { name, cnpj };

      await database.insert("emitters", emitter);

      return res.status(201).json({ emitter});
  }

  async index(req, res) {
    const emitters = await database.select("emitters");
    return res.json(emitters);
  }
}
