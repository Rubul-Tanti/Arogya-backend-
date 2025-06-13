// Import the Multer Module
const multer = require("multer");

// Set the the Multer as the memory Storage
const storage = multer.memoryStorage();

// Create the Upload Variable Where the  image upload
const upload = multer({ storage: storage });

// Export the Upload Variable
module.exports = upload;
