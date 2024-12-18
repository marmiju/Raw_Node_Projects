// Title: Sample handler
// Description: Handles requests to the sample route

// Module scaffolding
const handler = {};

// Define the sample handler function
handler.sampleHandler = (handlerProperties, callback) => {
    console.log(handlerProperties);
    callback(200, {
        message: 'This is a sample page',
    });
};

// Export the handler
module.exports = handler;
