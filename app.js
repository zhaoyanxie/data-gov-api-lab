const express = require("express");

const app = express();
const loadJSON = require("./utils/helper-functions").loadJSON;

const data = loadJSON("./utils/data.json");

app.use(express.json());

// TODO: Create CRUD endpoints for your data!

module.exports = app;
