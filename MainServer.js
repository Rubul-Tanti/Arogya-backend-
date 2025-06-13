const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");

const server = http.createServer(app);
// const ab=require("./Models/blogsSchema")
// ab()
const Port = process.env.PORT || 4000;

server.listen(Port, ()=>{
    console.log(`🚀 Server running on port ${Port}`);
})