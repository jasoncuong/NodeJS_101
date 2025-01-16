const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();

const hostname = process.env.HOST_NAME;
const port = process.env.PORT || 3001;

//config templates engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//config static file
app.use(express.static(path.join(__dirname, "public")));

//Khai bao route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/abc", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port http://${hostname}:${port}`);
});
