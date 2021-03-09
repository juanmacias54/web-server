const express = require("express");
const hbs = require("hbs");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 8080;

console.log(process.env)

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render('home', {
    nombre: 'Juan Macias',
    titulo: 'Curso Node'
  });
});

app.get("/generic", (req, res) => {
  res.render("generic");
});

app.get("/elements", (req, res) => {
  res.render("elements");
});

app.get("/hola-mundo",  (req, res)=> {
  res.send("hola-mundo desde /hola-mundo");
});

app.get("*",  (req, res)=> {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

