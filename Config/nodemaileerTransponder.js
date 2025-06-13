const nodemailer=require("nodemailer")
console.log(process.env.EMAIL_PASSWORD)
const transponder=nodemailer.createTransport({
    service:"gmail",
auth:{
    user:"arogyahealthcarehlep@gmail.com",
    pass:process.env.EMAIL_PASSWORD
}
})

module.exports=transponder