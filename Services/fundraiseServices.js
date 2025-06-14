const { create } = require("../Models/blogsSchema");
const raisefunds=require("../Models/fundRaising")
const fundraiseservice=async( campaignTitle,
        description,
        patient,
        medical,
        media,
        fundDetails,
        paymentInfo,
        donations,
        isVerified,
        verifiedBy,
        submittedBy,
        notes)=>{

    const fundraiseProfile = new raisefunds({
        campaignTitle,
        description,
        patient,
        medical,
        media,
        fundDetails,
        paymentInfo,
        donations,
        isVerified,
        verifiedBy,
        submittedBy,
        notes
    });

    
    await fundraiseProfile.save();
return fundraiseProfile
}
module.exports=fundraiseservice