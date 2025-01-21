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
    return res.writeHead(201).end()
  }

  index(req, res) {
    const users = database.select("users");
    
    return res.end(JSON.stringify(users))
  }

}

