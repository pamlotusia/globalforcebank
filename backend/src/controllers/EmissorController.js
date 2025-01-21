import { Database } from "../database/database.js";
const database = new Database();

export class EmissorController {
  async create(req, res) {
      const { name, cnpj, adress, email, tel, category, cvm, principalActivity } = req.body;

      const emitter = { name, cnpj, adress, email, tel, category, cvm, principalActivity };

      await database.insert("emitters", emitter);

      return res.status(201).json({ message: "Usuário criado com sucesso!" });
  }

  async index(req, res) {
    const emitter = await database.select("emitters");
    return res.json({ emitter });
  }
}
