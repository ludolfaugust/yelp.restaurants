const mongoose = require("mongoose");

const { Schema } = mongoose;

const CitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a City name"],
    maxlength: [500, "max 500 chars are allowed"],
  },
});

module.exports = mongoose.model("City", CitySchema);
