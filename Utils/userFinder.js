const userModel = require("../Models/userSchema");

module.exports.userFinder = async ({
  key,
  query,
  includePassword = false,
}) => {
  try {
    let selectFields = includePassword ? "+password" : "-password";

    let userQuery = userModel.findOne({ [key]: query }).select(selectFields);
    const user = await userQuery;
    return user || null;
  } catch (err) {
    console.error("Error in userFinder:", err);
    return null;
  }
};
