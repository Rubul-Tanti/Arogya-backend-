const mongoose = require("mongoose");
const otpSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  otp: {
    require: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 1 * 60,
  },
});
const otpModel = mongoose.model("otp", otpSchema);
module.exports = otpModel;
