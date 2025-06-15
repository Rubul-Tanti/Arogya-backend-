const { ApiError } = require("../../Middleware/errorHandlers")
const raisefunds=require("../../Models/fundRaising")

const fs=require("fs").promises
const path=require("path")
const uploadToCloudinary = require("../../Services/cloudinaryService")
const fundraiseservice=require("../../Services/fundraiseServices")
async function deleteAllFiles(folderPath){
  try {
    const files = await fs.readdir(folderPath);
    await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(folderPath, file);
        await fs.unlink(filePath);
      })
    );  console.log("✅ All files deleted from:", folderPath);
  } catch (err) {
    console.error("❌ Error deleting files:", err.message);
  }}


const createRaiseFundProfile=async(req,res)=>{

    if(!req.body){
   await deleteAllFiles("./uploads")
    return res.status(500).json({success:false,message:"enter all fields"})}

    const {campaignTitle,description,patient,fundDetails,paymentInfo,notes,submittedBy}=req.body
    const medicdata=JSON.parse(req.body.medical)
  
const mediaFiles=await uploadToCloudinary(req.files)
if(!mediaFiles){
    await deleteAllFiles("./uploads")
    return res.status(401).json({success:false,message:"enter all media files"}) }

 try{
    if(!campaignTitle||!description||!patient||!medicdata||!fundDetails||!paymentInfo||!mediaFiles||!notes||!submittedBy){
       await deleteAllFiles("./uploads")
       return res.status(401).json({success:false,message:"enter all fields"})
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
    return res.status(500).json({success:false,message:"enter all fields"})
}
return res.status(200).json({success:true,message:"Fund raise profile created successfully",data:newfundraiseprofile})

 }
 catch(e){
   await deleteAllFiles("./uploads")
throw new ApiError(e.message,505)
 }

}
module.exports=createRaiseFundProfile