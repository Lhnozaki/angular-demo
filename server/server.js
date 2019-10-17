const express = require("express");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());

app.post("/api/contact", (req, res) => {
  res.json({
    success: 200
  });
});

app.post("/api/login", (req, res) => {
  res.json({
    success: 200
  });
});

app.post("/api/register", (req, res) => {
  res.json({
    success: 200
  });
});

app.post("/api/logout", (req, res) => {
  res.json({
    success: 200
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
