import { pool } from "../database/connection.js";
import { compare } from "bcrypt";

import { AppError } from "../utils/AppError.js";

export class SessionController {
  async create(req, res) {
    const { email, password } = req.body;
    const db = pool;

    const select = `
        SELECT * FROM correntistas WHERE email = $1
        `;

    const result = await db.query(select, [email]);

    if (result.rows.length === 0) {
      return res.status(401).json({ message: "E-mail não cadastrado" });
    }

    //primeira instancia do resultado
    const user = result.rows[0];

    const comparedPassword = await compare(password, user.password);

    if (!comparedPassword) {
      throw new AppError('Senha incorreta', 400)
    }

    return res.json(user);
  }
}
