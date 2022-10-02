
const Wishlist = require('../models/wishlist');

exports.createWishlist = (req, res, next) => {
  const wishlist = new Wishlist({
    ...req.body
  });
  wishlist.save()
    .then(() => { res.status(201).json({
        message: 'Wishlist enregistré avec succès!'
      });
    }
  ).catch((error) => { res.status(400).json({error: error})});
};

exports.findAllWishlist = (req, res, next) => {
    Wishlist.find()
        .then(wishlist => res.status(200).json(wishlist))
        .catch(error => res.status(400).json({error}))
}

exports.findOneWishlist = (req, res, next) => {
    Wishlist.findOne({_id: req.params.id})
        .then(wish => res.status(200).json(wish))
        .catch(error => res.status(400).json({error}));
}