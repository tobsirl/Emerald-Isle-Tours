const mongoose = require('mongoose');

const reviewModel = new mongoose.Schema({
  review: {
    type: String,
    required: [true, 'Please provide a review']
  },
  rating: {
    type: Number,
    required: []
  }
});

const review = mongoose.model('Review', reviewModel);

module.exports = review;
