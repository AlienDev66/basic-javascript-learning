const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("Hello World 2");
});

app.listen(3001);
