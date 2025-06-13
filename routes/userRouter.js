const express = require("express");
const router = express.Router();
const {asyncErrorHandler} = require("../Middleware/errorHandlers");
const userRegister = require("../Controllers/user-controler/userRegister");
const userLogin = require("../Controllers/user-controler/userLogin");

router.post("/register",asyncErrorHandler(userRegister));
router.post("/login", asyncErrorHandler(userLogin));

module.exports = router;