const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommentSchema = new Schema({
  comment: {
    type: String,
    required: [true, "Please add a comment"],
    maxlength: [7000, "max 7000 chars are allowed"],
  },
  restaurant: {
    type: Schema.ObjectId, 
    ref: "Restaurant"
  },

})


module.exports = mongoose.model("Comment", CommentSchema);
