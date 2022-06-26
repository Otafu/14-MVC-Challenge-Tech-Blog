const Sequelize = require("sequelize");

console.debug(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW);

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
    port: process.env.DB_PORT,
  }
);

module.exports = db;
