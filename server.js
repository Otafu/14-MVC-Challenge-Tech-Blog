require("dotenv").config();

const path = require("path");
const express = require("express");
const routes = require("./routes");
const { sequelize } = require("./config");
const helpers = require("./utils/helpers");
const exphbs = require("express-handlebars");

const hbs = exphbs.create({
  helpers,
});

const session = require("express-session");
const { sessionConfig } = require("./config");

const app = express();

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(routes);

sequelize.sync();

const PORT = Number(process.env.PORT);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
