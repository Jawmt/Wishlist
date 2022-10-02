require('dotenv').config();

const mongoose = require('mongoose');

const connectDb = () => {
    mongoose.connect(process.env.MONGO_DATABASE)
        .then(() => console.log('Connexion à MongoDB réussie !'))
        .catch(() => console.log('Connexion à MongoDB échouée !'));
}

module.exports = connectDb;