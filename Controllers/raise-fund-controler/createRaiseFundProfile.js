const { ApiError } = require("../../Middleware/errorHandlers")
const raisefunds=require("../../Models/fundRaising")
const uploadToCloudinary = require("../../Services/cloudinaryService")
const fundraiseservice=require("../../Services/fundraiseServices")
const createRaiseFundProfile=async(req,res)=>{
    if(!res.body){res.status(500).json({success:false,message:"enter all fields"})}
    const {campaignTitle,description,patient,fundDetails,paymentInfo,notes,submittedBy}=req.body
    const medicdata=JSON.parse(req.body.medical)
  
const mediaFiles=await uploadToCloudinary(req.files)

 try{
    if(!campaignTitle||!description||!patient||!medicdata||!fundDetails||!paymentInfo||!mediaFiles||!notes||!submittedBy){
        res.status(401).json({success:false,message:"enter all fields"})
    throw new ApiError("enter all fields",500)
    }
    const media={
    photos:mediaFiles.photos,
    videoAppeal:mediaFiles.videoAppeal
}
const medical={
    diagnosis:medicdata.diagnosis,
    conditionDescription:medicdata.conditionDescription,
    hospital:medicdata.hospital,
    doctorName: medicdata.doctorName,
    estimatedCost:medicdata.estimatedCost,
    currency:medicdata.currency,
    medicalReports:mediaFiles.medicalReports,
    costEstimates:mediaFiles.costEstimates,
}


    const newfundraiseprofile=await fundraiseservice( campaignTitle,
    description,
    patient,
    medical,
    fundDetails,
    paymentInfo,
    media,
    notes,submittedBy)
    console.log(newfundraiseprofile)
if(!newfundraiseprofile){
    res.status(500).json({success:false,message:"enter all fields"})
}
    res.status(200).json({success:true,message:"Fund raise profile created successfully",data:newfundraiseprofile})

 }
 catch(e){
throw new ApiError(e.message,505)
 }

}
module.exports=createRaiseFundProfile