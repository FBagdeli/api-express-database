// Load our .env file
require('dotenv').config()

const { Pool } = require("pg");
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

const dbClient = new Pool({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: {
    require: true,
  },
})

module.exports = dbClient;