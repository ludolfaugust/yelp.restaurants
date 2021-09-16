const mongoose = require("mongoose");

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a restaurant name"],
    maxlength: [500, "max 500 chars are allowed"],
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [1500, "max 1500 chars are allowed"],
  },

  image: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [1500, "max 1500 chars are allowed"],
  },

  city: {
    type: Schema.ObjectId,
    ref: "City",
  },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
