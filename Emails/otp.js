const transporter = require("../Config/nodemaileerTransponder");
const sendOtp=async({email,otp})=>{
    const mailCredentials={
        from:process.env.SENDER_EMAIL,
        to:email,
        subject:"Arogya: Your Verification Code",
        html:`<p> Your Arogya verification code is: ${otp}. This code is valid for 1 minutes. Do not share it with anyone.</p>`
    }
    try{
      const res = await transporter.sendMail(mailCredentials);
    }catch(e){
        console.log(e)
    }
}
module.exports= sendOtp