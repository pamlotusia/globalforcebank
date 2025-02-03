import { pool } from "../database/connection.js";

export class EmissorController {
  async create(req, res) {
    const db = pool;

    const {
      password,
      nome_emissor,
      cnpj,
      endereco_rua,
      endereco_numero,
      endereco_complemento,
      endereco_cep,
      endereco_cidade,
      endereco_estado,
      email_contato,
      telefone_contato,
      categoria_emissor,
      registro_cvm,
      atividade_principal,
    } = req.body;

    const files = req.files;

    const insert = `
    INSERT INTO emissores (
    password, 
    nome_emissor, 
    cnpj, 
    endereco_rua,
    endereco_numero,
    endereco_complemento,
    endereco_cep,
    endereco_cidade,
    endereco_estado,
    email_contato,
    telefone_contato,
    categoria_emissor,
    registro_cvm,
    atividade_principal
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `;

    const values = [
      password,
      nome_emissor,
      cnpj,
      endereco_rua,
      endereco_numero,
      endereco_complemento,
      endereco_cep,
      endereco_cidade,
      endereco_estado,
      email_contato,
      telefone_contato,
      categoria_emissor,
      registro_cvm,
      atividade_principal,
    ];
    try {
      const result = await db.query(insert, values);
      return res.status(200).json();
    } catch (e) {
      console.log(e.message);
    }
  }

  async index(req, res) {
    const db = pool;

    const select = `
    SELECT * FROM emissores
   `;

    try {
      const {rows} = await db.query(select);
      return res.status(200).json(rows);
    } catch (e) {
      console.log(e.messate);
    }
  }
}
