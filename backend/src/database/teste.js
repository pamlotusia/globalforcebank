import Client from "pg";

const client = new Client({
	host: "147.79.82.72",
	port: 5432,
	user: "globaluser",
	password: "teste123",
	database: "gfbdb",
});

async function testConnection() {
	try {
		await client.connect();
		console.log('Conexão bem-sucedida ao PostgreSQL!');

		// Consulta simples
		const res = await client.query('SELECT NOW() AS current_time');
		console.log('Hora atual no servidor PostgreSQL:', res.rows[0].current_time);
	} catch (err) {
		console.error('Erro ao conectar ao PostgreSQL:', err);
	} finally {
		await client.end();
		console.log('Conexão encerrada.');
	}
}

testConnection();