const otpModel = require("../Models/otpSchema");
const {asyncErrorHandler, ApiError} = require("../Middleware/errorHandlers");
module.exports.createNewOtpForUser = async({userId,email,otp})=>{
    console.log(userId,email,otp)
    if(email == null || !email && otp == null || !otp){
        throw new ApiError("Error occur when Otp create some filed are missing",400)
    }
    await otpModel.findOneAndDelete({userId});
    const Otp = await otpModel.create({
        userId,
        email,
        otp
    })
    return Otp;
}