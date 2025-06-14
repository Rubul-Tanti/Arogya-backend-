const cloudinary=require("cloudinary").v2
const path=require("path")
const fs=require("fs")
const cloudinaryConfig=require("../Config/cloudinaryConfig")
cloudinaryConfig()
const uploadToCloudinary=async(files)=>{
  let fieldnamearray=[
     "videoAppeal",
    "costEstimates",
    "medicalReports",
    "photos"]
    let newurlObject={
    videoAppeal:"",
    costEstimates:"",
    medicalReports:"",
    photos:""
    }
  
  try{
    for(let i=0;i<fieldnamearray.length;i++){
      let fieldname=fieldnamearray[i]
      let path=files[fieldname][0].path
      const {url}= await cloudinary.uploader.upload(path,{
  resource_type: i==0?"video":"image",           // 👈 Tell Cloudinary it's a video
  folder: "campaign-media",         // Optional: organize in folder
})
newurlObject[fieldname]=url
fs.unlinkSync(path, (err) => {
  if (err) {
    console.error("Error deleting file:", err);
  } else {
    console.log("Local file deleted successfully");
  }})
}

}
  catch(e){console.error("cant upload to  cloudinary",e)}

   return newurlObject
}
module.exports=uploadToCloudinary