/**
 * Created by Hossam Elnabawy on 03/01/2017.
 */
let fs = require('fs');
let util = require('util');
let http = require('http');
let events = require('events');
let eventEmitter = new events.EventEmitter();



http.createServer(function(request, response){

    console.log('resopnse');

    response.writeHead(200,{'Content-Type': `text/plain`},"my name is hosam");

    response.write(`Hello World...
Iam Hosam`);
    response.end();
}).listen(3000,(err)=>{
    if(err) throw err;
    console.log(`You are listening on Port: 3000`)
});
