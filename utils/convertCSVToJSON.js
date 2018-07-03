var csv2json = require("csv2json");
var fs = require("fs");

const convertCSVToJSON = (pathToCSVFile, targetDir="utils", separator=",") => {
  fs.createReadStream(pathToCSVFile)
    .pipe(
      csv2json({
        // Defaults to comma.
        separator: separator
      })
    )
    .pipe(fs.createWriteStream(`${targetDir}/data.json`));
};

convertCSVToJSON("./utils/data.csv")