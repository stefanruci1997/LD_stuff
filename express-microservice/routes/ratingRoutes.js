const express = require('express');
const router = express.Router();
const RatingController = require('../controllers/RatingController');

// Define routes for ratings
router.get('/', RatingController.getAllRatings);
router.post('/', RatingController.createRating);
router.get('/:id', RatingController.getRatingById);
router.put('/:id', RatingController.updateRating);
router.delete('/:id', RatingController.deleteRating);

module.exports = router;
