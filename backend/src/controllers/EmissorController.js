import { Database } from "../database/database.js";
const database = new Database();

export class EmissorController {
  async create(req, res) {
    const {
      name,
      cnpj,
      email,
      tel,
      typeEmisser,
      typeDebenture,
      typePayment,
      typeGuarantees,
      rua,
      numero,
      complemento,
      cep,
      cidade,
      estado,
      registroCvm,
      atividade,
      amortizacao,
      purposeCapture
    } = req.body;

    const emitter = {
      name,
      cnpj,
      email,
      tel,
      typeEmisser,
      typeDebenture,
      typePayment,
      typeGuarantees,
      rua,
      numero,
      complemento,
      cep,
      cidade,
      estado,
      registroCvm,
      atividade,
      amortizacao,
      purposeCapture
    };

    await database.insert("emitters", emitter);

    return res.status(201).json({ emitter });
  }

  async index(req, res) {
    const emitters = await database.select("emitters");
    return res.json(emitters);
  }
}
