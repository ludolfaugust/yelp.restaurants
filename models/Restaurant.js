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
    required: [true, "Please add an URL of an image"],
    maxlength: [1500, "max 1500 chars are allowed"],
  },

  city: {
    type: Schema.ObjectId,
    ref: "City",
  },
   
  tag: {
    type: Schema.ObjectId,
    ref: "Tag",
  }, 

  priceRange: {
    type: String, 
    required: [true, "Please add a Price range"],
    maxlength: [1500, "max 1500 chars are allowed"],
  }, 

  openingHours: {
    type: String, 
    required: [true, "Please add an Opening Hours"],
    maxlength: [1500, "max 1500 chars are allowed"],
  }, 

});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
