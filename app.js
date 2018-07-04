const express = require("express");

const app = express();
const index_router = require("./routes/index_router");
const main_food_group_router = require("./routes/main_food_group_router");
const search_router = require("./routes/search_router");
let data = require("./utils/data.json");

app.use(express.json());

// TODO: Create CRUD endpoints for your data!
app.use("/", index_router);

// Display all main_food_group
app.use("/main_food_group", main_food_group_router);

// user to search for food product
app.use("/search", search_router);

module.exports = app;
