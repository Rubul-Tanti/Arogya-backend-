const express = require("express");
const router = express.Router();
const {asyncErrorHandler} = require("../Middleware/errorHandlers");
const userRegister = require("../Controllers/user-controler/userRegister")

router.post("/register", asyncErrorHandler(userRegister));

module.exports = router;