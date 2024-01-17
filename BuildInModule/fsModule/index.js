const fs = require("fs");
fs.unlink("nameData.txt", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successful");
  }
});
