// title: Not Found  handler
//Description: Not Found handler 


const handler ={};

handler.notfoundhandler =(handlerPropertiece, callback)=>{
    callback(404,{
        message : 'Page Not Found!',
    })
}


module.exports =handler;