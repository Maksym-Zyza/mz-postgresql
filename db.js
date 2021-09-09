const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5434,
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

module.exports = pool;
