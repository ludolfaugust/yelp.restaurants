require('dotenv').config();
require('colors');
const express = require('express');

const connectDB = require('./dbinit.js');
const users = require('./api/restaurants');
const server = express();
const PORT = process.env.PORT || 5000;

connectDB();

server.use(express.json());
server.get('/', (req, res) => res.send('Welcome to Yelp!'));
server.use('/restaurants', restaurants);

server.listen(PORT, () => console.log(`Server started on port ${PORT}`));