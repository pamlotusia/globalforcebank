// id INCREMENT PRIMARY KEY,
import { pool } from "./connection.js"

const createUsers = async () => {
  const client = await pool.connect()
  try{
    console.log('db conectado.')

    const query = `
    CREATE TABLE IF NOT EXISTS correntistas (
    id SERIAL PRIMARY KEY,
    cpf TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL
    )
    `

    await client.query(query)
    console.log('tabela users criada com sucesso')
  } catch(error){
    console.error('erro  ao criar tabela: ', error)
  } finally{
    client.release()
    console.log('conexão liberado')
  }
}

createUsers()

// node database/createUsers.js