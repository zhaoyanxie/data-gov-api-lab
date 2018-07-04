const express = require("express");

const app = express();
const loadJSON = require("./utils/helper-functions").loadJSON;

const data = require("./utils/data.json");
console.log(data)

app.use(express.json());

// TODO: Create CRUD endpoints for your data!

module.exports = app;
