const { doctorFinder } = require("../../Utils/doctorFinder");

module.exports.uploadProfileImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "Please upload a file" });
  }

  const { email } = req.doctor;
  const doctor = await doctorFinder({
    key: "email",
    query: email,
  });

  if (!doctor) return res.status(404).json("Doctor not found");

  doctor.profileImage = req.file.buffer.toString("base64");
  doctor.pictype = req.file.mimetype;
  await doctor.save();
  return res
    .status(200)
    .json({ profilepic: doctor.profileImage, pictype: doctor.pictype });
};
