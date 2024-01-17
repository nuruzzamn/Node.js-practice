const fs = require("fs");
// need a result boolean value for true or false value
fs.exists("nameData.txt", (result) => {
  if (result) {
    console.log("found");
  } else {
    console.log("not found");
  }
});
