const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      minlength: [2, "username cannot be less than 2 letters"],
      maxlength: [10, "username cannot be more than 10 letters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Email is invalid"],
      index: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false, // do not return password by default
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt
    versionKey: false, // disables __v field
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// 🔹 Virtual field (example)
userSchema.virtual("isAdmin").get(function () {
  return this.role === "admin";
});

// 🔹 Middleware: Hash password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
// 🔹 Instance method: Check password
userSchema.methods.checkPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};
userSchema.method.GenerateToken = function () {
  return jwt.sign({ email: this.email, id: this._id }, process.env.JWT_KEY, {
    expiresIn: process.env.Expire_Time,
  });
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
