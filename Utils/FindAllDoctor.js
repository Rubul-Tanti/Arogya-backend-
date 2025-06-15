const doctorModel = require("../Models/doctorSchema")
const {ApiError} = require("../Middleware/errorHandlers");
const FindAllDoctor = async()=>{
    const allDoctor = await doctorModel.find();
    if(!allDoctor){
        throw new ApiError("Somthing went wrong!", 500)
    }
    return allDoctor;
}
module.exports = FindAllDoctor;