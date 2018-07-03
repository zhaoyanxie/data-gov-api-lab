// these 2 lines of code lets you load json data as a javascript object,
const loadJSON = require("./utils/helper-functions").loadJSON;

const data = loadJSON("./utils/data.json");

// do anything with this data. return it in a GET /handler, for example
console.log(data);
