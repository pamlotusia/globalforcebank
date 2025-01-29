import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
	host: "147.79.82.72",
	port: 5432,
	user: "globaluser",
	password: "123",
	database: "gfbdb",
});

async function testConnection() {
	const client = await pool.connect();

	try {
		console.log('Conexão bem-sucedida ao PostgreSQL!');

	} catch (err) {
		console.error('Erro ao conectar ao PostgreSQL:', err);
	} finally {
	 client.release();
		console.log('Conexão liberada.');
	}
}

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
    console.error('erro ao criar tabela: ', error)
  } finally{
    client.release()
    console.log('conexão liberado')
  }
}

const createBankAccount = async () => {
	const client = await pool.connect();
  try{
    console.log('db conectado')

    const query = `
      CREATE SEQUENCE account START 10 INCREMENT 1;

      CREATE TABLE IF NOT EXISTS conta_bancaria (
      id SERIAL PRIMARY KEY,
      user_id INT REFERENCES correntistas(id) ON DELETE CASCADE,
      agency VARCHAR(4) NOT NULL DEFAULT '0001',
      account_number INT UNIQUE DEFAULT nextval('account')
      )
    `
		await client.query(query)

    console.log('tabela bankAccount criada com sucesso')
  } catch(error){
    console.error('erro ao criar tabela: ', error)
  } 
}

createUsers()

createBankAccount()

testConnection();