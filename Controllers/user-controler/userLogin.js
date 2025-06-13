const {userFinder} = require("../../Utils/userFinder");
const createOtp = require("../../Utils/createOtp");
const sendOtp = require("../../Emails/otp");
const { createNewOtpForUser } = require("../../Services/OtpServices");
const userLogin = async(req,res)=>{
    const {email, password} = req.body;
    const user = await userFinder({key: "email", query: email, includePassword:true});
    if(!user) return res.status(401).json("User is not Authorized");
    const isMatch = await user.checkPassword(password);
    if(!isMatch) return res.status(203).json("Email or password wrong!");
    const token = user.generateToken();
    const Otp = createOtp(6);
    await createNewOtpForUser({ userId: user._id ,email,otp: Otp});
    res.status(201).json({message : "Login successfully otp go to your Gmail.", user,token});
    await sendOtp({ email, otp: Otp });
}
module.exports=userLogin