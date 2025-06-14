const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6,
    select: false,
  },
  specialization: {
    type: String,
    required: true,
    enum: [
      "General Physician",
      "Cardiologist",
      "Dermatologist",
      "Neurologist",
      "Pediatrician",
      "Psychiatrist",
      "Gynecologist",
      "Orthopedic",
      "ENT",
      "Dentist",
      "Oncologist",
      "Other",
    ],
    default: "General Physician",
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    match: /^[0-9]{10}$/,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    default: "Other",
  },
  qualifications: {
    type: [String],
    required: true,
  },
  experience: {
    type: Number,
    min: 0,
    default: 0,
  },
  languages: {
    type: [String],
    default: ["English"],
  },
  availableDays: {
    type: [String],
    default: [],
  },
  availableTime: {
    start: String,
    end: String,
  },
  hospitalAffiliation: {
    type: String,
    default: "Independent",
  },
  address: {
    type:String,
    required:true
  },
  clincname:{
    type:String,
    default:null
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  profileImage: {
    type: Buffer,
    contentType: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

doctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

doctorSchema.methods.checkPassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

doctorSchema.methods.generateToken = function () {
  return jwt.sign({ email: this.email, id: this._id }, process.env.JWT_KEY, {
    expiresIn: process.env.Expire_Time,
  });
};

const doctorModel = mongoose.model("doctor", doctorSchema);
module.exports = doctorModel;