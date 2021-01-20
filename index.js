const serverPort = process.env.PORT || 4444
let fs = require('fs')
const http = require('http');
http.createServer((req, res) => {
    fs.readFile(__dirname + req.url, function (err,data) {
        if (err) {
          res.writeHead(404);
          res.end(JSON.stringify(err));
          return;
        }
        res.writeHead(200);
        res.end(data);
      });
}).listen(serverPort);
