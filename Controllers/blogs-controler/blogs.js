const blogsModel=require("../../Models/blogsSchema")
const {ApiError}=require("../../Middleware/errorHandlers")
const blogs=async(req,res)=>{
const {category}=req.params

try{
    if(category){
    
        if(category==="all"){
            const blogList=await blogsModel.find()
            if(blogList.length!==0){
                res.status(201).json({success:true,data:blogList})
            } 
        }
    else{
        const blogList=await blogsModel.find({category:category})   
        if(blogList.length!==0){
            res.status(200).json({success:true,data:blogList})
        }else{
            res.status(501).json({success:false,message:"enter valid param user/param"})
        }
    }   
}
}catch(e){
throw new ApiError(e.message,500)
}
}
module.exports=blogs