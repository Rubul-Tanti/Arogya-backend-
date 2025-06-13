const userModel = require("../Models/userSchema");
const { ApiError } = require("../Middleware/errorHandlers");
module.exports.createNewUser = async ({
  username,
  email,
  password,
  role = "user",
  isActive = true,
}) => {
  if (!username && !email && !password) {
    throw new ApiError("All Field are required!", 400);
  }
  const user = await userModel.create({
    username,
    email,
    role,
    isActive,
  });
  return user;
};
