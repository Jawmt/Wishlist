const express = require('express');
const router = express.Router();
const wishlistCtrl = require('../controllers/wishlistController');



router.get('/',wishlistCtrl.findAllWishlist);
router.get('/:id',wishlistCtrl.findOneWishlist);
router.post('/', wishlistCtrl.createWishlist);
router.put('/:id', wishlistCtrl.modifyOneWish);
router.delete('/:id', wishlistCtrl.deleteOneWish)


module.exports = router;