const mongoose = require("mongoose");
const link = process.env.MONGO_DB_URL;
const debuger = require("debug")("development:console");

const connectWithDb = () => {
    mongoose.connect(link, {
      serverSelectionTimeoutMS: 5000,
    }).then(
        () => debuger("Connect with Mongoose Hackthon0Database.")
    ).catch(err=>{
        debuger("Error Occur in connection", err);
        setTimeout(connectWithDb,5000)
    });
}
module.exports = connectWithDb;