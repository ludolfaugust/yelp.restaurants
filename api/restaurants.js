const express = require('express');

const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  //deleteRestaurant,
  // updateRestaurant
} = require('../controllers/restaurants');

const api = express.Router();

api
  .route('/') 
  .get(getRestaurants)
  //.post(createRestaurant)

api
  .route('/:id')
  .get(getRestaurant)
  //.delete(deleteUser)
  //.put(updateUser)

module.exports = api;