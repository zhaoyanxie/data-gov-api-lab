const express = require("express");
const router = express.Router();
let data = require("../utils/data.json");

router.get("/", (req, res) => {
  res.json(data);
});

module.exports = router;
