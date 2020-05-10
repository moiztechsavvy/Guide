var pgp = require("pg-promise")(/* options */);
require("dotenv").config();
const cn = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  max: 30, // use up to 30 connections
};

module.exports = pgp(cn);
