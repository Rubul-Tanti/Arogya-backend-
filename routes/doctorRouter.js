const express = require("express");
const router = express.Router();
const {asyncErrorHandler} = require("../Middleware/errorHandlers");
const doctorRegister = require("../Controllers/doctor-coctroler/doctorRegister");
const doctorLogin = require("../Controllers/doctor-coctroler/doctorLogin");


router.post("/register", asyncErrorHandler(doctorRegister))
router.post("/login", asyncErrorHandler(doctorLogin))

module.exports = router;