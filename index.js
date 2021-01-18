
async function memes(){
const serverPort = process.env.PORT || 4444
const httpsLocalhost = require("https-localhost")()
let fs = require('fs')
const https = require('https');

const certs = await httpsLocalhost.getCerts()

https.createServer(certs, (req, res) => {
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
}

memes()
