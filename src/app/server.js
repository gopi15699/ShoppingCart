const http = require("http");
const app = require("./exp.js");

const server = http.createServer(app) ;

server.listen(3000,()=>{
    console.log();
});


