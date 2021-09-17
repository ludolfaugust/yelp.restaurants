const Restaurant = require("../models/Restaurant");
const City = require("../models/City");
const Tag = require("../models/Tag");

const getRestaurants = async (req, res) => {
  try {
    console.log(req.query);
    const restaurants = await Restaurant.find(req.query).populate("city tag");

    console.log(restaurants);
    res.json({
      success: true,
      data: restaurants,
      msg: "show all users",
    });
  } catch (err) {
    console.log(err);
  }
};

const getRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    const restaurant = await Restaurant.findById(id);

    res.json({
      msg: `show restaurant with id ${id}`,
      success: true,
      data: restaurant,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRestaurants,
  getRestaurant,
};
