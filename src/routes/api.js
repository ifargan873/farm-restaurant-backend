const express = require("express");
const fs = require("fs");

const router = express.Router();


router.get("/menu", (req, res, next) => {
  var data = fs.readFileSync("./src/data/menu.json", "utf-8");
  res.send(JSON.parse(data));
});

module.exports = router;
