import { Database } from "../database/database.js";
const database = new Database();

export class BankAccount {
  async create(req, res, userId) {
    try {
      const contaBancaria = {
        userId,
        agencia: "0001",
        conta: "101010",
      };

      await database.insert("bank", contaBancaria);

      return res.json({
        message: "conta bancaria criada com sucesso",
        contaBancaria,
      });
    } catch {
      console.log(contaBancaria);
    }
  }

  async index(req, res) {
    try {
      const contas = await database.select("bank");
      return res.end(JSON.stringify(contas));
    } catch (e) {
      console.log(e.message);
    }
  }
}
