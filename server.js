const port = 4000;
const ip = "0.0.0.0";
const dist = __dirname;

// Express
const express = require('express');

express()
    // Static content
    .use(express.static(dist))
    // SPA routing
    //.get('/*', (req, res) => res.sendFile(__dirname, '/dist/index.html'))
    // Start server
    .listen(port, ip, function () {
        console.log(ip + ':' + port);
    });
