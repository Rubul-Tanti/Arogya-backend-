const {userFinder} = require("../../Utils/userFinder");
const {createNewUser} = require("../../Services/userServices");
const createOtp = require("../../Utils/createOtp");
const {createNewOtpForUser} = require("../../Services/OtpServices");
const sendOtp = require("../../Emails/otp");
const userRegister= async(req,res) => {
    const {username, email, password} = req.body;
    const ExistingUser = await userFinder({key : "email", query: email});
    if(ExistingUser) return res.status(406).json("User is Already have account!");
    const user = await createNewUser({
        username,
        email,
        password,
    })
    const token = user.generateToken();
    const Otp = createOtp(6);
    await createNewOtpForUser({ userId: user._id ,email,otp: Otp});
    res.status(201).json({user,token});
    await sendOtp({email, otp: Otp});
}
module.exports=userRegister