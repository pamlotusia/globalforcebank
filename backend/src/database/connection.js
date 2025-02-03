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
    console.log("Conexão bem-sucedida ao PostgreSQL!");
  } catch (err) {
    console.error("Erro ao conectar ao PostgreSQL:", err);
  } finally {
    client.release();
    console.log("Conexão liberada.");
  }
}


testConnection();
