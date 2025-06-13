const {userFinder} = require("../../Utils/userFinder");
const createOtp = require("../../Utils/createOtp");
const sendOtp = require("../../Emails/otp");
const { createNewOtpForUser } = require("../../Services/OtpServices");
const userLogin = async(req,res)=>{
    const {email, password} = req.body;
    const user = await userFinder({key: "email", query: email, includePassword:true});
    if(!user) return res.status(401).json("User is not Authorized");
    const isMatch = user.checkPassword(password);
    if(!isMatch) return res.status(203).json("Email or password wrong!");
    const Otp = createOtp(6);
    const otpCreation = await createNewOtpForUser({ userId: user._id ,email,otp: Otp});
    await sendOtp({ email, otp: Otp });
    res.status(201).json("Login successfully otp go to your Gmail.");
}
module.exports=userLogin