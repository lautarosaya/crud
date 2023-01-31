const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* Rutas */
const mainRoute = require("./routes/main-route");
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
