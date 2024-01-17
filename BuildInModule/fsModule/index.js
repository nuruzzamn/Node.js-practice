const fs = require("fs");
fs.rename("name.txt", "nameData.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});
