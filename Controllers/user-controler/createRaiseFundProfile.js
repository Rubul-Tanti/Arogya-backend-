const { ApiError } = require("../../Middleware/errorHandlers")
const raisefunds=require("../../Models/fundRaising")
const fundraiseservice=require("../../Services/fundraiseServices")
const createRaiseFundProfile=async(req,res)=>{
const {campaignTitle,description,patient,medical,fundDetails,paymentInfo,donations,isVerified,verifiedBy,submittedBy,notes}=req.body
 try{
    if(!campaignTitle||!description||!patient||!medical||!fundDetails||!paymentInfo||!donations||!isVerified||!verifiedBy||!submittedBy||!notes){
    throw new ApiError("enter all fields",500)
    }
    const newfundraiseprofile=fundraiseservice( campaignTitle,
    description,
    patient,
    medical,
    fundDetails,
    paymentInfo,
    donations,
    isVerified,
    verifiedBy,
    submittedBy,
    notes)
if(newfundraiseprofile){
    res.status(200).json({success:true,message:"Fund raise profile created successfully",data:newfundraiseprofile})
}else{
res.status(500).json({success:false,message:"enter all fields"})
}
 }
 catch(e){
throw new ApiError(e.message,505)
 }

}
module.exports=createRaiseFundProfile