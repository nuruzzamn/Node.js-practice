const { log } = require("console");
const fs = require("fs");
fs.writeFile("name.txt", "zaman, nur, nuruzzaman, moon, shuvo", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});
