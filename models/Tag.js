const mongoose = require("mongoose");

const { Schema } = mongoose;

const TagSchema = new Schema({
  tag: {
    type: String,
    required: [true, "Please add a tag"],
    maxlength: [500, "max 500 chars are allowed"],
  },
});

module.exports = mongoose.model("Tag", TagSchema);
