const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "build")));

app.get("/users/", (req, res) => {
  return res.send(`Hello World`);
});

app.get("/users/:userId", (req, res) => {
  return res.send(`userID=${req.params.userId}`);
});

app.listen(3000, () => console.log(`Example app listening on port 3000!`));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
