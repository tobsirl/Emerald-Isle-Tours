const express = require('express');

const router = express.Router();
const {
  getAllReviews,
  getReview,
  createReview
} = require('../controllers/reviewController');

router
  .route('/')
  .get(getAllReviews)
  .post(createReview);

router.route('/:id').get(getReview);

module.exports = router;
