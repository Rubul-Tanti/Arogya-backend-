const FindAllDoctor = require("../../Utils/FindAllDoctor");

module.exports.seeAllDoctors = async (req,res)=>{
    const allDoc = await FindAllDoctor();
    return res.status(200).json(allDoc);
}