const express = require("express");
const mongoose = require("mongoose");

//INICIANDO O APP
const app = express();

// INICIANDO O DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// PRIMEIRA ROTA
app.get("/", (request, response) => {
  response.send("Hello World 2");
});

app.listen(3001);
