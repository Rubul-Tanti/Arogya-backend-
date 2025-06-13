const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");
const { ApiError } = require("../Middleware/errorHandlers");
const { userFinder } = require("./userFinder");

const {setIO} = require("./socketInitialize");
const initSocket = (server) => {
    const io = new Server(server, {
      cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
      },
    });
    setIO(io);

    io.use(async (socket, next) => {
        try {
          const token =
            socket.handshake.auth?.userToken ||
            socket.handshake.headers?.authorization?.split(" ")[1];

      
          if (!token) {
            return next(new Error("Authentication error: No token provided"));
          }
          const decoded = jwt.verify(token, process.env.JWT_KEY);
          if (!decoded) {
            return next(new Error("Authentication error: Invalid token"));
          }
      
          const user = await userFinder({ key: "email", query: decoded.email });
          if (!user) {
            return next(new Error("Authentication error: User not found"));
          }
      
          socket.user = user._id;
          next();
        } catch (error) {
          console.error("Socket auth error:", error);
          return next(new Error("Authentication error"));
        }
      });
      
    io.on("connection", async (socket) => {
        console.log("connected to socket.")
    } )
}

module.exports = {initSocket};