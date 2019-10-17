const express = require('express');

const router = express.Router();
const {
  getAllReviews,
  getReview,
  createReview
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

router
  .route('/')
  .get(getAllReviews)
  .post(protect, restrictTo, createReview);

router.route('/:id').get(getReview);

module.exports = router;
