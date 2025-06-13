var express = require('express');
var router = express.Router();
const userLogin=require("../Controllers/user-controler/userLogin")
const userRegister=require("../Controllers/user-controler/userRegister")
/* GET home page. */

router.get("/user/login",userLogin)
router.get("/user/register",userRegister)


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
