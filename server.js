require('dotenv').config();
require('colors');
const cors = require('cors');


const express = require('express');


const connectDB = require('./dbinit.js');
const restaurants = require('./api/restaurants');
const tags = require('./api/tags'); 
const cities = require('./api/cities');
const comments = require('./api/comments');

const server = express();
const PORT = process.env.PORT || 5000;

connectDB();
server.use(cors());

server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to Yelp!'));
server.use('/restaurants', restaurants);
server.use('/tags', tags);
server.use('/cities', cities); 
server.use('/comments', comments)

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));