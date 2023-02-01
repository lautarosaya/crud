const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const mainRoute = require("./routes/main-route");

const app = express();

/* Method-Override */
app.use(methodOverride("_method"));
/* JSON a objeto */

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Rutas */

app.use(mainRoute);

/* Ejs */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

/* Public */
app.use(express.static(path.resolve(__dirname, "../public")));

/* JSON */

/* Server */
app.listen("3001", () => {
  console.log("Server Andando");
});
