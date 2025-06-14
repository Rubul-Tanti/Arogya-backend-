const cors = require("cors");

const corsConfig = cors({
  origin: (origin, callback) => {
    const allowedOrigins = ["http://localhost:5173",process.env.FRONTENDURL];

    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "Accept-Version"],
  exposedHeaders: ["X-Total-Count", "Content-Range"],
  preflightContinue: false,
  credentials: true,
});

module.exports = corsConfig;
