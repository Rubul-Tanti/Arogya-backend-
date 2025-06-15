const { json } = require("body-parser");
const { create } = require("../Models/blogsSchema");
const raisefunds=require("../Models/fundRaising")
const fundraiseservice=async( campaignTitle,
    description,
    patient,
    medical,
    fundDetails,
    paymentInfo,
    media,
    notes,submittedBy)=>{
const patientobj=JSON.parse(patient)
const paymentobj=JSON.parse(paymentInfo)
const fundDetailsobj=JSON.parse(fundDetails)

// // console.log(medical.hospital.name)
// console.log(fundDetailsobj)
// console.log(fundDetailsobj.reasonForHelp)
// // console.log(JSON.parse(medical.hospital))
// return
        const fundraiseProfile = new raisefunds({
    campaignTitle:campaignTitle,
  description:description,
  // Patient Details
  patient: {
    fullName:patientobj.fullName,
    age:patientobj.age,
    gender:patientobj.gender,
    location: {
      city:patientobj.location.city,
      state:patientobj.location.state,
      country:patientobj.location.country
    },
    contactNumber:patientobj.contactNumber
  },

  // Medical Information
  medical,

  // Media for Campaign
  media: {
    photos:media.photos,
    videoAppeal:media.videoAppeal
  },

  // Fundraiser Details
  fundDetails: {
    targetAmount:fundDetailsobj.targetAmount,
    deadline:fundDetailsobj.deadline,
    reasonForHelp:fundDetailsobj.reasonForHelp
  },

  // Donation Options
  paymentInfo: {
    accountHolderName:paymentobj.accountHolderName,
    bankName:paymentobj.bankName,
    accountNumber:paymentobj.accountNumber,
    ifscCode:paymentobj.ifscCode,
    upiId:paymentobj.upiId
  },
  submittedBy:submittedBy,
  notes:notes,
    });

    
    await fundraiseProfile.save();
return fundraiseProfile
}
module.exports=fundraiseservice