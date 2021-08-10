var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const url_api = `http://data.nba.net/data/10s/prod/v1/2019/players.json`;

  res.json([
    fetch(url_api)
      .then((res) => res.json())
      .then((data) => console.log(data)),
  ]);
});

module.exports = router;
