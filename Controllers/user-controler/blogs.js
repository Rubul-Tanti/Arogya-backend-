const blogsModel=require("../../Models/blogsSchema")
const {ApiError}=require("../../Middleware/errorHandlers")
const blogs=async(req,res)=>{
const {category}=req.params
try{
    if(category){
     const blogList=await blogsModel.find({category:category})   
    res.status(200).json({success:true,data:blogList})
    }else{
        const blogList=await blogsModel.find()
    res.status(201).json({success:true,data:blogList})
    }
}catch(e){
throw new ApiError(e.message,500)
}
}
module.exports=blogs