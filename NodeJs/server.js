const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

//INICIANDO O APP
const app = express();
app.use(express.json());
app.use(cors());

// INICIANDO O DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3001);
