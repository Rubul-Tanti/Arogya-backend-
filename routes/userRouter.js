const express = require("express");
const blogs=require("../Controllers/blogs-controler/blogs")
const router = express.Router();
const {asyncErrorHandler} = require("../Middleware/errorHandlers");
const userRegister = require("../Controllers/user-controler/userRegister");
const userLogin = require("../Controllers/user-controler/userLogin");
const upload = require("../Config/multer-connection");
const uploadProfileImage = require("../Controllers/user-controler/ProfilePicUploader");
const profileGetter = require("../Controllers/user-controler/profileGetter");
const isLoggedInMiddleware = require("../Middleware/isLoggedInMiddleware");
const multerErrorHandler=require("../Middleware/multerErroHandler")
const createRaiseFundProfile=require("../Controllers/raise-fund-controler/createRaiseFundProfile")
const getallraisingFund=require("../Controllers/raise-fund-controler/getraisingfundall")
const uploadMiddleware=require("../Middleware/uploadMiddleware")
const getraisingFundProfile=require("../Controllers/raise-fund-controler/getraisingFundProfile")
router.post("/register",asyncErrorHandler(userRegister));
router.post("/login", asyncErrorHandler(userLogin));
router.post("/picUpload",isLoggedInMiddleware, upload.single("userPic"), asyncErrorHandler(uploadProfileImage));
router.get("/profile", isLoggedInMiddleware, asyncErrorHandler(profileGetter))
router.post("/raisefunds",uploadMiddleware.fields([
  { name: "photos", maxCount: 4 }, // up to 4 photos
  { name: "medicalReports", maxCount: 1 },  // 1 video
  { name: "costEstimates", maxCount: 1 },  // 1 video
  { name: "videoAppeal", maxCount: 1 },  // 1 video
]),multerErrorHandler,asyncErrorHandler(createRaiseFundProfile))
router.get("/blogs/:category",isLoggedInMiddleware,asyncErrorHandler(blogs))
router.get("/raisingFundProfile/:id",asyncErrorHandler(getraisingFundProfile))
router.get("/getraisingFund/all",asyncErrorHandler(getallraisingFund))
module.exports = router;