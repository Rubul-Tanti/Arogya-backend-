class ApiError extends Error{
    constructor(message,statuscode){
        super(message)
        this.name="API ERROR"
        this.statusCode=statuscode
    }
}
const asyncErrorHandler=(fn)=>(req,res,next)=>{
    Promise.resolve(fn(req,res,next)).catch(next)
}

const globalErrorHandler=(err,req,res,next)=>{
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({message:err.message,error:err.name})
    }else if(err.name=="ValidationError"){
        res.status(400).json({
            status:"Error"
            ,message:"Validation Error"
        })
    }
    else{
        res.status(500).json({message:"An unexpected error occured",status:"Error"})
    }
}

module.exports={globalErrorHandler,asyncErrorHandler,ApiError}