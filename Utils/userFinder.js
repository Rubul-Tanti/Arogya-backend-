const userModel = require("../Models/userSchema");

module.exports.userFinder = async ({
  key,
  query,
  includePassword = false,
//   includePopulate = false,
//   populateSort = { date: -1 },
}) => {
  try {
    let selectFields = includePassword ? "+password" : "-password";

    let userQuery = userModel.findOne({ [key]: query }).select(selectFields);

    // if (includePopulate) {
    //   userQuery = userQuery.populate([
    //     {
    //       path: "bloodRequest",
    //       model: "recipient",
    //     },
    //     {
    //       path: "Donate",
    //       model: "recipient",
    //     },
    //   ]);
    // }

    const user = await userQuery;
    return user || null;
  } catch (err) {
    console.error("Error in userFinder:", err);
    return null;
  }
};
