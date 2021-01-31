const serverPort = process.env.PORT || 4444;
let fs = require("fs");
var mime = require("mime-types");
const http = require("http");
http
  .createServer((req, res) => {
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end(JSON.stringify(err));
        return;
      }
      if (req.url === "/.well-known/apple-app-site-association")
        res.setHeader("Content-Type", "application/pkcs7-mime");

      if (req.url === "/.well-known/assetlinks.json")
        res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
      res.end(data);
    });
  })
  .listen(serverPort);
