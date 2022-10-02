const express = require('express');
const wishlistRoutes = require('./routes/wishlist');
const app = express();
const connectDb = require('./config/db');


connectDb();
app.use(express.json());


app.use('/wishlist', wishlistRoutes);

module.exports = app;
