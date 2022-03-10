const mongoose = require("mongoose");

//  A schema is a description of what data should look like
const MessagesSchema = new mongoose.Schema(
  {
    text: { required: true, type: String },
    id_user: { required: true, type: String },
  },
  { timestamps: true }
);

// model is the tool we use to interact with DB
const Messages = mongoose.model("Messages", MessagesSchema);
module.exports = Messages;
