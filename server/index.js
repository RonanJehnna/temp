require("./models/db.js");

// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mainRoutes = require('./routes/index');
const app = express();

// import routes from "./routes/index.js";
// var routes = require('./routes/');

app.use('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// app.get("/", (req, res) => {
//   res.send(`
//   <h2>Welcome to Students Databse!! </h2>
//   <h3>Click here to get access to the <b> <a href="/student/list">Database</a></b></h3>`);
// });
// app.use("/student", studentController);
app.use('/', routes);
app.listen(5000, () => {
  console.log("Server started on port 5000");
});
