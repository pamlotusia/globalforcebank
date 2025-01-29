import { client } from "./connection";

const createBankAccount = async () => {
  try{
    await client.connect()
    console.log('db conectado')

    const query = `
    CREATE SEQUENCE account START WITH 00010 INCREMENT BY 1

    CREATE TABLE IF NOT EXISTS bankAccount (
    id AUTOINCREMENT PRIMARY KEY,
    agency TEXT NOT NULL DEFAULT '0001',
    account_number INT UNIQUE DEFAULT nextval('account'),
    )
    `

    await client.query(query)
    console.log('tabela bankAccount criada com sucesso')
  } catch(error){
    console.error('erro ao criar tabela: ', error)
  } finally{
    await client.end()
    console.log('conexão encerrada')
  }
}

createBankAccount()

// node database/createBankAccount.js