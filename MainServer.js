const http = require("http");
require("dotenv").config;

const app = require("./app");

const server = http.createServer(app);

const Port = process.env.PORT || 4000;

server.listen(Port, ()=>{
    console.log(`🚀 Server running on port ${Port}`);
})