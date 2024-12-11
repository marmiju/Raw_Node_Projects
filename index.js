// title: Uptime Monitoring Application 
// description: A RESTFUL API to Monitor Up or down time of User defined links
//Author : MAR miju
// Started date : 11/12/2024


//defendencies
const http = require('http');

// app object - module scaffolding
const app = {};

// Configuration 
app.config = {
    port: 5000,
};

// Create Server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`Listening to port ${app.config.port},\n Main URL: http://localhost:${app.config.port}`);
    });
};

// Handle Request Response
app.handleReqRes = (req, res) => {
    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response
    res.write('Hello World');
    res.end();
};

app.createServer();
