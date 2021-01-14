const express = require('express');
const app = express();
const https = require('https');
let fs = require('fs');
fs.readFileSync('./apple-app-site-association')

app.get('/', (req,res) =>{
    res.send("Memes!")
})

//set the port to listen to client connection and messages
const serverPort = process.env.PORT || 4444
app.listen(serverPort, () => console.log(`Server listening to ${serverPort}`));

setInterval(() => {
    https.get('https://test-deeplink-memes.herokuapp.com/', (resp) => {
        resp.on('data', r => {
            console.log("Sending request to self.")
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}, 1200000)