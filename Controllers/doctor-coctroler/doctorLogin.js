const {doctorFinder} = require("../../Utils/doctorFinder")
const createOtp = require("../../Utils/createOtp");
const sendOtp = require("../../Emails/otp");
const { createNewOtpForUser } = require("../../Services/OtpServices");

const doctorLogin = async(req,res)=>{
        const {email, password} = req.body;
        const doctor = await doctorFinder({key: "email", query: email, includePassword:true});
        if(!doctor) return res.status(401).json("doctor is not Authorized");
        const isMatch = await doctor.checkPassword(password);
        if(!isMatch) return res.status(203).json("Email or password wrong!");
        const token = doctor.generateToken();
        const Otp = createOtp(6);
        await createNewOtpForUser({ userId: doctor._id ,email,otp: Otp});
        res.status(201).json({message : "Login successfully otp go to your Gmail.", doctor,token});
        await sendOtp({ email, otp: Otp });
}
module.exports=doctorLogin