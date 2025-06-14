const mongoose = require('mongoose');
const donationLogSchema = new mongoose.Schema({
  donorName: { type: String },
  amount: { type: Number, required: true },
  donatedAt: { type: Date, default: Date.now },
  method: { type: String, enum: ['bank', 'upi', 'other'], default: 'upi' },
  message: { type: String }
}, { _id: false });

const fundraisingSchema = new mongoose.Schema({
  // Basic Campaign Info
  campaignTitle: { type: String, required: true },
  description: { type: String, required: true },

  // Patient Details
  patient: {
    fullName: { type: String, required: true },
    age: { type: Number },
    gender: { type: String, enum: ['Male', 'Female', 'Other'] },
    location: {
      city: { type: String },
      state: { type: String },
      country: { type: String, default: 'India' }
    },
    contactNumber: { type: String }
  },

  // Medical Information
  medical: {
    diagnosis: { type: String, required: true },
    conditionDescription: { type: String, required: true },
    hospital: {
      name: { type: String, required: true },
      location: { type: String, required: true }
    },
    doctorName: { type: String, required: true },
    estimatedCost: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    medicalReports:{type:String, required: true},
    costEstimates: {type:String, required: true}
  },

  // Media for Campaign
  media: {
    photos:{type:String, required: true},
    videoAppeal:{type:String, required: true}
  },

  // Fundraiser Details
  fundDetails: {
    targetAmount: { type: Number, required: true },
    deadline: { type: Date },
    status: { 
      type: String, 
      enum: ['draft', 'active', 'paused', 'completed', 'closed'], 
      default: 'draft' 
    },
    reasonForHelp: { type: String, required: true }
  },

  // Donation Options
  paymentInfo: {
    accountHolderName: { type: String },
    bankName: { type: String },
    accountNumber: { type: String },
    ifscCode: { type: String },
    upiId: { type: String }
  },

  // Admin & Meta
  isVerified: { type: Boolean, default: false },
  verifiedBy: { type: String },
  submittedBy: { type: String, required: true },
  notes: { type: String },

}, { timestamps: true });

module.exports = mongoose.model('FundraisingRequest', fundraisingSchema);
