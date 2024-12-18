// Title: Uptime Monitoring Application
// Description: A RESTful API to monitor uptime or downtime of user-defined links
// Author: MAR Miju
// Started Date: 11/12/2024

// Dependencies
const http = require('http');
const { handleReqRes } = require('./Helper/handlerReqRes'); // Adjusted to relative path

// App object - module scaffolding
const app = {};

// Configuration
app.config = {
    port: 1000,
};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening on port ${app.config.port},\n Main URL: http://localhost:${app.config.port}`);
    });
};

// Handle Request Response
app.handleReqRes = handleReqRes;

// Start the server
app.createServer();
