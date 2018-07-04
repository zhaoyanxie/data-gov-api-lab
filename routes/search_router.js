const express = require("express");
const router = express.Router();
let data = require("../utils/data.json");

router.get("/", (req, res) => {
  if (Object.keys(req.query).length === 0) {
    res.json("Search for 'food' and/or 'brand'.");
  } else {
    const result = data
      .filter(
        food =>
          req.query.food
            ? food.product_name
                .toLowerCase()
                .includes(req.query.food.toLowerCase())
            : true
      )
      .filter(
        food =>
          req.query.brand
            ? food.brand_name
                .toLowerCase()
                .includes(req.query.brand.toLowerCase())
            : true
      );

    res.json(result);
  }
});

module.exports = router;
