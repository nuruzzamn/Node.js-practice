const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
const myServer = http.createServer((req, res) => {
  //in writeHead have two parameter (status code, content type)
  res.writeHead(202, { "content-type": "text/plain" });
  res.write("<h1> successfully create my first server </h1>");
  res.end();
});

const server = myServer.listen(port, hostname, () => {
  console.log(`server is running at http://${hostname}:${port} `);
});

// console.log(http);
