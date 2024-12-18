
const {sampleHandler} = require('./Handlers/routeHandlers/sample');
const { AboutHandler} = require('./Handlers/routeHandlers/About');

const routes ={
    sample : sampleHandler,
    about : AboutHandler,
}

module.exports = routes;