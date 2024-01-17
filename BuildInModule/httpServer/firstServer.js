const http = require("http");

const myServer = http
  .createServer((req, res) => {
    res.end("successfully create");
  })
  .listen(3000);

// console.log(http);
