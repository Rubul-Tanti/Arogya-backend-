const doctorModel = require("../Models/doctorSchema");
const { ApiError } = require("../Middleware/errorHandlers");
module.exports.createNewDoctor = async ({
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
}) => {
  if (
    !name?.trim() ||
    !password?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !specialization?.trim() ||
    !qualifications ||
    !address?.trim()
  ) {
    throw new ApiError("All fields are required!", 400);
  }
  const doctor = await doctorModel.create({
    name,
    password,
    specialization,
    email,
    phone,
    qualifications,
    experience,
    languages,
    availableDays,
    availableTime: availableTime
      ? { start: availableTime.start, end: availableTime.end }
      : undefined,
    hospitalAffiliation,
    address,
    clincname,
    isVerified,
    gender,
  });
  return doctor;
};
