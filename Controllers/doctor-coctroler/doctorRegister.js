const { doctorFinder } = require("../../Utils/doctorFinder");
const { createNewDoctor } = require("../../Services/doctorServices");
const createOtp = require("../../Utils/createOtp");
const {createNewOtpForUser} = require("../../Services/OtpServices");
const sendOtp = require("../../Emails/otp");
const doctorRegister= async(req,res) => {
    const {
      name,
      password,
      specialization,
      email,
      phone,
      qualifications,
      experience,
      languages,
      availableDays,
      availableTime,
      hospitalAffiliation,
      address,
      clincname,
      isVerified,
      gender,
    } = req.body;
    const ExistingDoctor = await doctorFinder({key : "email", query: email});
    if(ExistingDoctor) return res.status(406).json("User is Already have account!");
    const doctor = await createNewDoctor({
      name,
      password,
      specialization,
      email,
      phone,
      qualifications,
      experience,
      languages,
      availableDays,
      availableTime,
      hospitalAffiliation:hospitalAffiliation.trim(),
      address,
      clincname,
      isVerified,
      gender,
    });
    const Otp = createOtp(6);
    await createNewOtpForUser({ userId: doctor._id ,email,otp: Otp});
    res.status(201).json({doctor});
    await sendOtp({email, otp: Otp});
}
module.exports=doctorRegister