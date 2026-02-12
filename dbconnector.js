const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: "localhost",
  user: "meglex",
  password: "passworder",
  connectionLimit: 5,
  database: "spillbibliotek",
});
async function query(sql, params) {
  let connection;
  try {
    connection = await pool.getConnection();
    const res = await connection.query(sql, params);
    return res;
  } catch (error) {
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

async function close() {
  await pool.end();
}

module.exports = { query, close };

if (require.main === module) {
  (async () => {
    try {
      const res = await query("SELECT 1 AS ok;");
      console.log("DB test result:", res);
    } catch (error) {
      console.error("DB test error:", error);
    } finally {
      await close();
      console.log("DB connection pool closed.");
    }
})();
}