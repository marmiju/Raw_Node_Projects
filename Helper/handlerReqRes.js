// Dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notfoundhandler } = require('../Handlers/routeHandlers/NotFound');



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

    const handlerPropertiece = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryObject,
        headerObject,
    }

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notfoundhandler;

    chosenHandler (handlerPropertiece,(statusCode,payload)=>{
        const StatusCode = typeof(statusCode) === 'number' ?statusCode : 500;
        const PayLoad = typeof(payload) === 'object' ? payload : {};
         const Spayload = JSON.stringify(PayLoad);

         res.writeHead(StatusCode);
         res.end(Spayload);
    })


    // Buffer to hold the payload
    const decoder = new StringDecoder('utf-8');
    let realData = '';
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    // req.on('end', () => {
    //     realData += decoder.end();
       

    //     // Set response headers
    //     res.setHeader('Content-Type', 'application/json');

    //     // Send response
    //     res.writeHead(200);
    //     res.end(JSON.stringify({ message: 'Hello, World!', data: realData }));
    // });
};

module.exports = handler;
