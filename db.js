const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "root",
  host: "localhost",
  port: 5434,
  database: "hot_dog",
});

module.exports = pool;
