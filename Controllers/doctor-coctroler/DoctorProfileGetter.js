const DoctorprofileGetter = async (req, res) => {
  return res.status(200).json({ Doctor: req.doctor });
};

module.exports = DoctorprofileGetter;
