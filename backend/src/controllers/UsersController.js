import {Database} from '../database/database.js'

const database = new Database();

export class UsersController {
  create(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    database.insert("users", user);

    return res.status(201).json({});
  }

  index(req, res) {
    const users = database.select("users");
    res.json({users}
    );
  }

  delete(req, res){

  }
}

