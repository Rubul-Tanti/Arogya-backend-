const http = require("http");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./app");
// const server = http.createServer(app);
const Port = process.env.PORT || 4000;
app.listen(Port, ()=>{
    console.log(`🚀 Server running on port ${Port}`);
})