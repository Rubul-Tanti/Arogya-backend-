const nodemailer=require("nodemailer")
const transporter = nodemailer.createTransport({
  host: process.env.HOSTER_CLR,
  port: +process.env.PORT_CLR,
  secure: true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 10000,
});

module.exports = transporter;