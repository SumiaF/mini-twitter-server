const mongoose = require("mongoose");

async function connectTwitterDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to data base");
  } catch (error) {
    return error;
  }
}
module.exports = connectTwitterDB;
