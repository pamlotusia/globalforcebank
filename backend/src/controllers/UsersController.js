import { Database } from "../database/database.js";
import { BankAccount } from "./BankAccount.js";
import { v4 as uuidv4 } from 'uuid';

const bankAccount = new BankAccount()
const database = new Database();

export class UsersController {
  async create(req, res) {
    try {
      const { name, email, cpf, password } = req.body;

      const user = {
        userId: uuidv4(),
        name,
        email,
        cpf,
        password,
      };

      await database.insert("users", user);
      bankAccount.create('users') 

      return res.status(201).json({ message: "Usuário criado com sucesso!" });
    } catch (e) {
      console.log(e);
    }
  }

  async index(req, res) {
    try {
      const users = await database.select("users");
      return res.end(JSON.stringify(users));
    } catch (e) {
      console.log(e);
    }
  }
}
