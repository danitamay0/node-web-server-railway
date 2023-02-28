require("dotenv").config();
const express = require("express");
const hbs = require("hbs");
const app = express();
port = process.env.PORT;

console.log(port);
//Hbs
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    name: "Daniel Tamayo",
    title: "Node JS",
  });
  // res.send('hello world')
});

app.get("/generic", (req, res) => {
  //res.sendFile(__dirname+'/public/generic.html')
  //
  res.render("generic", {
    name: "Daniel Tamayo",
    title: "Node JS",
  });
});
app.get("/elements", (req, res) => {
  // res.sendFile(__dirname+'/public/generic.html')
  res.render("elements", {
    name: "Daniel Tamayo",
    title: "Node JS",
  });
});
app.get("**", (req, res) => {
  //res.send('404 | page not found')
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => console.log(`listeng in port ${port}`));
