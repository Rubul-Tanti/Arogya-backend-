const Fundraisingmodel=require("../../Models/fundRaising")
const {ApiError}=require("../../Middleware/errorHandlers")
const getraisingFundProfile=async(req,res)=>{
try{
    const id=req.params.id
    console.log(id)
    if(!id){res.status(500).json({success:false,message:"no id found"})}
const raisingFundProfile=await Fundraisingmodel.findById(id)
if(raisingFundProfile.length!==-1){
    res.status(200).json({success:true,data:raisingFundProfile})
}else{
    res.status(501).json({status:false,message:"no campaign found"})
}
}
catch(e){
    throw new ApiError("something went wrong ",404)
}

}
module.exports=getraisingFundProfile