const http = require("http");
const dotenv = require("dotenv");
const { initSocket } = require("./Utils/Socket.io");
dotenv.config();
const app = require("./app");
const server = http.createServer(app);
initSocket(server);
const Port = process.env.PORT || 4000;
server.listen(Port, ()=>{
    console.log(`🚀 Server running on port ${Port}`);
})