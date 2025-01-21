import { Database } from "../database/database.js";
const database = new Database();

export class UsersController {
  async create(req, res) {
    try {
      const { name, email, password } = req.body;

      const user = {
        name,
        email,
        password,
      };

      await database.insert("users", user);

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
