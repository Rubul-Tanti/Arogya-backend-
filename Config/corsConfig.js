const cors=require("cors") 
const corsConfig=()=>{

    return cors({
        origin:(orgin,callback)=>{
            const allowedorigin=["http://localhost:5173","https://domain.com"]
            if(!origin||allowedorigin.indexOf(orgin)!==-1){
                callback(null,true)
            }else{
                callback(new Error("not allowed by cors"))
            }
        },
        methods:["GET","POST","PUT","DELETE"],
        allowedHeaders:["Content-Type","Authorization","Accept-Version"],
        exposedHeaders:["X-Total-Count","Content-Range"],
        preflightContinue:false,
        credentials:true,
    })

}
module.exports=corsConfig