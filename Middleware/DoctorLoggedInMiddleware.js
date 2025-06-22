const jwt = require("jsonwebtoken");
const { doctorFinder } = require("../Utils/doctorFinder");
const doctorLogerAuthenticate = async (req, res, next) => {
  try {
    let token = req.cookies?.DoctorToken;
    if (!token && req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ error: "Unauthorized: Token missing" });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const doctor = await doctorFinder({
      key: "email",
      query: decoded.email,
      includePassword: true,
    });
    req.doctor = doctor;
    next();
  } catch (error) {
    console.log(error);
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};

module.exports = doctorLogerAuthenticate;
