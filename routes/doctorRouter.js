const express = require("express");
const router = express.Router();
const {asyncErrorHandler} = require("../Middleware/errorHandlers");
const doctorRegister = require("../Controllers/doctor-coctroler/doctorRegister");
const doctorLogin = require("../Controllers/doctor-coctroler/doctorLogin");
const doctorLogerAuthenticate = require("../Middleware/DoctorLoggedInMiddleware");
const DoctorprofileGetter = require("../Controllers/doctor-coctroler/DoctorProfileGetter");
const { seeAllDoctors } = require("../Controllers/doctor-coctroler/showAllDoctor");
const { uploadProfileImage } = require("../Controllers/doctor-coctroler/DoctorProfilePicUploader");
const upload = require("../Config/multer-connection");

router.post("/register", asyncErrorHandler(doctorRegister))
router.post("/login", asyncErrorHandler(doctorLogin))
router.post(
  "/picUpload",
  doctorLogerAuthenticate,
  upload.single("doctorPic"),
  asyncErrorHandler(uploadProfileImage)
);
router.get(
  "/profile",
  doctorLogerAuthenticate,
  asyncErrorHandler(DoctorprofileGetter)
);
router.get("/see-alldoctor",asyncErrorHandler(seeAllDoctors));

module.exports = router;