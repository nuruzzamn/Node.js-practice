const fs = require("fs");
fs.appendFile("name.txt", `${""} all are my friends`, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("successfull");
  }
});
