const express = require("express");
const router = express.Router();
const {asyncErrorHandler} = require("../Middleware/errorHandlers");
const doctorRegister = require("../Controllers/doctor-coctroler/doctorRegister");
const doctorLogin = require("../Controllers/doctor-coctroler/doctorLogin");
const doctorLogerAuthenticate = require("../Middleware/DoctorLoggedInMiddleware");
const DoctorprofileGetter = require("../Controllers/doctor-coctroler/DoctorProfileGetter");

router.post("/register", asyncErrorHandler(doctorRegister))
router.post("/login", asyncErrorHandler(doctorLogin))
router.get(
  "/profile",
  doctorLogerAuthenticate,
  asyncErrorHandler(DoctorprofileGetter)
);

module.exports = router;