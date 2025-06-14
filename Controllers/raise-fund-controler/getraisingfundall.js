const Fundraisingmodel=require("../../Models/fundRaising")
const {ApiError}=require("../../Middleware/errorHandlers")
const getRaisingFundAll=async(req,res)=>{
    try{
        const raisingFundArray=await Fundraisingmodel.find({},'campaignTitle description media submittedBy createdAt')
        if(raisingFundArray.length<0){res.status(500).json({message:"internal erro",success:false})}
        res.status(200).json({success:true,data:raisingFundArray})

    }catch(e){
        throw new ApiError(e.message,505)
    }

}
module.exports=getRaisingFundAll