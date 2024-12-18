// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');

// Module scaffolding
const handler = {};

// Handle Request and Response
handler.handleReqRes = (req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryObject = parsedUrl.query;
    const headerObject = req.headers;

    // Buffer to hold the payload
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log({
            trimmedPath,
            method,
            queryObject,
            headerObject,
            realData,
        });

        // Set response headers
        res.setHeader('Content-Type', 'application/json');

        // Send response
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Hello, World!', data: realData }));
    });
};

module.exports = handler;
