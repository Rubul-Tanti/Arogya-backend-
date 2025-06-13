const crypto=require("crypto")

const createOtp=(numofdigit)=>{
    let otp=""
    let digits=[1,2,3,4,5,6,7,8,9,0]
    for(let i=0;i<numofdigit;i++){
        const randomIndex=crypto.randomInt(0,digits.length)
otp+=digits[randomIndex];
}
return otp;
}
module.exports=createOtp