const multer = require("multer");
const path = require("path");
const {ApiError}=require("../Middleware/errorHandlers")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // saved to local /uploads folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 50
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|mp4|mov|avi/;
    const ext = allowed.test(path.extname(file.originalname).toLowerCase());
    const mime = allowed.test(file.mimetype);
    if (ext && mime) cb(null, true);
    else cb( new ApiError("Only images and videos are allowed"));
  },
});

module.exports = upload;