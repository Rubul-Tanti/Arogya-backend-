const { userFinder } = require("../../Utils/userFinder");

module.exports.uploadProfileImage = async (req,res) => {
      if (!req.file) {
        return res.status(400).json({ message: "Please upload a file" });
      }
    
      const {email} = req.user;
      const user = await userFinder({
        key: "email",
        query:email,
      });

      if (!user) return res.status(404).json("User not found");

      user.profilepic = req.file.buffer.toString("base64");
      user.pictype = req.file.mimetype;
      await user.save();
      return res
        .status(200)
        .json({ profilepic: user.profilepic, pictype: user.pictype });
}