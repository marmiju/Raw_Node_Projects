
// title : About handler

const handler ={};

handler.AboutHandler =(handlerPropertiece,callback)=>{
 callback(200,{
    message : 'Hurray! About Page Found',
 })
}
module.exports =handler;