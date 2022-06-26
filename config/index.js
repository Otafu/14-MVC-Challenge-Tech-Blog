const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sequelize = require("./sequelize");
const sessionConfig = {
  secret: process.env.DB_PASS,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
    checkExpirationInterval: 1000 * 60 * 5, // 5 minutes in milliseconds
    expiration: 1000 * 60 * 30, // 30 minutes in milliseconds
  }),
};

module.exports = { sessionConfig, sequelize };
