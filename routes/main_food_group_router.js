const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
let data = require("../utils/data.json");

router.use(bodyParser.json());

const getAllFoodGroups = allData => {
  const allFoodGroups = [];
  allData.forEach((food, index, array) => {
    if (index === 0) {
      allFoodGroups.push(food.main_food_group.toLowerCase());
    } else if (
      index > 0 &&
      food.main_food_group.toLowerCase() !==
        array[index - 1].main_food_group.toLowerCase()
    ) {
      allFoodGroups.push(food.main_food_group.toLowerCase());
    }
  });
  return allFoodGroups;
};

const getMainFoodGroupItems = reqParameter => {
  const main_food_group = data.filter(
    food => food.main_food_group.toLowerCase() === reqParameter.toLowerCase()
  );
  return main_food_group;
};

router.get("/", (req, res) => {
  res.json(getAllFoodGroups(data));
});

router.get("/:main_food_group", (req, res) => {
  res.json(getMainFoodGroupItems(req.params.main_food_group));
});

router.post("/", (req, res) => {
  data.push(req.body);
  res.json(getAllFoodGroups(data));
});

// TODO: update a food item
router.put("/:main_food_group", (req, res) => {
  data.unshift(req.body);
  res.json(getMainFoodGroupItems(req.params.main_food_group));
});

router.delete("/:main_food_group", (req, res) => {
  const toDelete = req.params.main_food_group;
  data = data.filter(
    food => food.main_food_group.toLowerCase() !== toDelete.toLowerCase()
  );

  res.json(data);
});
module.exports = router;
