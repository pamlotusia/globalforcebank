import pkg from "pg";
const { Client } = pkg;

const client = new Client({
	host: "147.79.82.72",
	port: 5432,
	user: "globaluser",
	password: "123",
	database: "gfbdb",
});

async function testConnection() {
	try {
		await client.connect();
		console.log('Conexão bem-sucedida ao PostgreSQL!');
		const res = await client.query('SELECT NOW() AS current_time');
		console.log('Hora atual no servidor PostgreSQL:', res.rows[0].current_time);
	} catch (err) {
		console.error('Erro ao conectar ao PostgreSQL:', err);
	} finally {
		await client.end();
		console.log('Conexão encerrada.');
	}
}

const pg = require('knex')({
	client: 'pg',
	connection: process.env.PG_CONNECTION_STRING,
	searchPath: ['knex', 'public'],
  });


testConnection();