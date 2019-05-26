const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.end("jMail . . . ");
});

app.get("/mail", function(req, res) {
  res.end("here are you mails");
});

module.exports = app;
