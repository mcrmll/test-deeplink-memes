const serverPort = process.env.PORT || 4444;
var baseDirectory = __dirname   // or whatever base directory you want
var express = require("express");
var app = express();

var app = express();
app.use(express.static(baseDirectory)); //use static files in ROOT/public folder

app.get("/", function(request, response){ //root dir
    response.send("Hello!!");
});

app.get("/chat", function(request, response){ //root dir
  response.sendFile('chat.html', {root: __dirname })
});

app.listen(serverPort, 'localhost');
