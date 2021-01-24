const { Pool } = require('pg')

async function getCurrentDatabaseTime() {
  const pool = new Pool()

  const client = await pool.connect()
  const res = await client.query(`SELECT COUNT(*) FROM note`)
  await client.end()

  return JSON.stringify(res);
}
exports.getCurrentDatabaseTime = getCurrentDatabaseTime;
