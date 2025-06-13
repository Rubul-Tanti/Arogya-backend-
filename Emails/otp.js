const transponder=require("../Config/nodemaileerTransponder")
const sendOtp=async(email,otp)=>{

    const mailCredentials={
        from:"arogyahealthcarehlep@gmail.com",
        to:email,
        subject:"Arogya: Your Verification Code",
        html:`<p> Your Arogya verification code is: ${otp}. This code is valid for 1 minutes. Do not share it with anyone.</p>`
    }
    try{
      const res= await transponder.sendMail(mailCredentials)
console.log(res)
    }catch(e){
        console.log(e)

    }
}
module.exports= sendOtp