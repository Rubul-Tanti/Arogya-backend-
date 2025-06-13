const {userFinder} = require("../../Utils/userFinder");
const {createNewUser} = require("../../Services/userServices");
const createOtp = require("../../Utils/createOtp");
const {createNewOtpForUser} = require("../../Services/OtpServices")
const userRegister= async(req,res) => {
    const {username, email, password, role} = req.body;
    const ExistingUser = await userFinder({key : "email", query: email});
    if(ExistingUser) return res.status(406).json("User is Already have account!");
    const user = await createNewUser({
        username,
        email,
        password,
        role
    })
    await user.save();
    const Otp = createOtp(6);
    const otpCreation = await createNewOtpForUser({ userId: user._id ,email,Otp});

}
module.exports=userRegister