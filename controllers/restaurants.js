const Restaurant = require("../models/Restaurant");
const City = require("../models/City");
const Tag = require("../models/Tag");
const Comment = require("../models/Comment");

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find(req.query).populate("city tag");

    console.log(restaurants);
    res.json({
      success: true,
      data: restaurants,
      msg: "show all restaurants",
    });
  } catch (err) {
    console.log(err);
  }
};

const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);
    const comments = await Comment.find({restaurant:id})
    console.log(comments);

    res.json({
      msg: `show restaurant with id ${id}`,
      success: true,
      data: {...restaurant._doc, comments}
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRestaurants,
  getRestaurant,
};
