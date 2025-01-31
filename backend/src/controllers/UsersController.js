import { pool } from "../database/connection.js";
import bcrypt from "bcrypt";

export class UsersController {
  async create(req, res) {
    const db = pool;
    try {
      const { name, email, cpf, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 8);

      const insert = `
      INSERT INTO correntistas (name, email, cpf, password)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `;

      const values = [name, email, cpf, hashedPassword];

      const result = await db.query(insert, values);

      return res
        .status(201)
        .json({ user: result.rows[0], message: "Usuário criado com sucesso!" });
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "erro ao criar correntistas" });
    }
  }

  async index(req, res) {
    try {
      const db = pool;

      const select = `
      SELECT * FROM correntistas`;
      const result = await db.query(select);

      return res.status(200).json(result.rows);
    } catch (e) {
      console.error(e);
      return res.status(500).json({ message: "erro ao listar correntistas" });
    }
  }
}
