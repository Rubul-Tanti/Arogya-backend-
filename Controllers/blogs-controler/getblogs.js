const blogsModel=require("../../Models/blogsSchema")
const {ApiError}=require("../../Middleware/errorHandlers")
const getblogs=async(req,res)=>{
const {id}=req.params

try{
    if(id){
    
            const blog=await blogsModel.findById(id)
            if(blog){
                res.status(201).json({success:true,data:blog})
            } 
        }
    else{
   res.status(500).json({success:false,json:"something went wrong"})
    }   

}catch(e){
throw new ApiError(e.message,500)
}
}
module.exports=getblogs