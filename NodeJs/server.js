const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

//INICIANDO O APP
const app = express();

// INICIANDO O DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

const Product = mongoose.model("Product");

// PRIMEIRA ROTA
app.get("/", (request, response) => {
  Product.create({
    title: "React Native",
    description: "Build native apps with React",
    url: "http://github.com/facebook/react-native",
  });
  response.send("Hello World 2");
});

app.listen(3001);
