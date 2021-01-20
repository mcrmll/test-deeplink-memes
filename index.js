const serverPort = process.env.PORT || 4444
let fs = require('fs')
var mime = require('mime-types')
const http = require('http');
http.createServer((req, res) => {
    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        console.log(__dirname + req.url)
        res.setHeader("Content-Type", mime.lookup(__dirname + req.url));
        res.writeHead(200);
        res.end(data);
      });
}).listen(serverPort);
