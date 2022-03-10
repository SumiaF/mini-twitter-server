const mongoose = require("mongoose");

//  A schema is a description of what data should look like
const UsersSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String },
  password: { required: true, type: String },
});

// model is the tool we use to interact with DB
const Users = mongoose.model("Users", UsersSchema);
module.exports = Users;
