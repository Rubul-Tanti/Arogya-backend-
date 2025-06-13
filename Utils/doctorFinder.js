const doctorModel = require("../Models/doctorSchema");;
module.exports.doctorFinder = async ({ key, query, includePassword = false }) => {
  try {
    let selectFields = includePassword ? "+password" : "-password";

    let doctorQuery = doctorModel.findOne({ [key]: query }).select(selectFields);
    const doctor = await doctorQuery;
    return doctor || null;
  } catch (err) {
    console.error("Error in doctorFinder:", err);
    return null;
  }
};