const express = require("express");
const router = express.Router();
let data = require("../utils/data.json");

router.get("/", (req, res) => {
  res.redirect("/api-docs");
});

module.exports = router;
