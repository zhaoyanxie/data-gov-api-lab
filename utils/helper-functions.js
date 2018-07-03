const fs = require("fs");

const loadJSON = pathToJSONFile => {
  const contents = fs.readFileSync(pathToJSONFile);
  const jsonContent = JSON.parse(contents);

  return jsonContent;
};

module.exports = {
  loadJSON
};
