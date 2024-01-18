const http = require("http");
const fs = require("fs");
const port = 3000;
const hostName = "127.0.0.1";

const server = http.createServer((req, res) => {
  console.log("url", req.url);
  const handleRoute = (fileLocation, statusCode) => {
    fs.readFile(fileLocation, (err, data) => {
      if (err) throw err;
      res.writeHead(statusCode, { "content-type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleRoute("./pages/index.html", 200);
  } else if (req.url === "/about") {
    handleRoute("./pages/about.html", 200);
  } else if (req.url === "/contact") {
    handleRoute("./pages/contact.html", 200);
  } else {
    handleRoute("./pages/error.html", 200);
  }
});

const myServer = server.listen(port, hostName, () => {
  console.log(`server running at ${hostName}:${port}`);
});
