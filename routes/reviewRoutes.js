const express = require('express');

const router = express.Router();
const { getAllReviews, getReview } = require('../controllers/reviewController');

router.route('/').get(getAllReviews);

router.route('/:id').get(getReview);

module.exports = router;
