const express = require("express");
const router = express.Router();
const {asyncErrorHandler} = require("../Middleware/errorHandlers");
const userRegister = require("../Controllers/user-controler/userRegister");
const userLogin = require("../Controllers/user-controler/userLogin");
const upload = require("../Config/multer-connection");
const uploadProfileImage = require("../Controllers/user-controler/ProfilePicUploader");
const profileGetter = require("../Controllers/user-controler/profileGetter");
const isLoggedInMiddleware = require("../Middleware/isLoggedInMiddleware");
const blogs=require("../Controllers/user-controler/blogs")
const createRaiseFundProfile=require("../Controllers/user-controler/createRaiseFundProfile")
router.post("/register",asyncErrorHandler(userRegister));
router.post("/login", asyncErrorHandler(userLogin));
router.post("/picUpload",isLoggedInMiddleware, upload.single("userPic"), asyncErrorHandler(uploadProfileImage));
router.get("/profile", isLoggedInMiddleware, asyncErrorHandler(profileGetter))
router.get("/blogs/:category",isLoggedInMiddleware,asyncErrorHandler(blogs))
router.post("/raisefunds",isLoggedInMiddleware,createRaiseFundProfile)
module.exports = router;