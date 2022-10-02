const express = require('express');

const app = express();
const connectDb = require('./config/db');


connectDb();
app.use(express.json());

app.use((req,res)=> {
    res.json({message : 'Votre requete a bien été recuee'});
})

module.exports = app;
