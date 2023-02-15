const reviewModal = require("../model/review");

// POST //
const storeReview = async (req, res) => {
  try {
    const review = new reviewModal(req.body);
    const createReview = await review.save();
    res.status(201).send(createReview);
  } catch (e) {
    res.status(400).send(e);
  }
};

// GET ALL VISITORS DATA //
const getAllReviews = async (req, res) => {
  try {
    const reviewData = await reviewModal.find();
    reviewData.sort((a, b) => (a.time < b.time ? 1 : b.time < a.time ? -1 : 0));
    res.send(reviewData);
  } catch (e) {
    res.send(e);
  }
};

const getReviews = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      res.status(400).send("Product id required");
    } else {
      const reviewData = await reviewModal.find({ productId });
        reviewData.sort((a, b) =>
          a.time < b.time ? 1 : b.time < a.time ? -1 : 0
        );
        res.send(reviewData);
    }
  } catch (e) {
    res.send(e);
  }
};

// GET review DATA BY "ID" //
const getReviewDetail = async (req, res) => {
  try {
    const _id = req.params.id;
    const reviewData = await reviewModal.findById(_id);
    if (!reviewData) {
      return res.status(404).send();
    } else {
      res.send(reviewData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
};

// UPDATE VISITORS DATA //
const updateReview = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateReviews = await reviewModal.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(updateReviews);
  } catch (e) {
    res.status(404).send(e);
  }
};

// DELETE VISITORS DATA //
const deleteReview = async (req, res) => {
  try {
    const deleteReview = await reviewModal.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(404).send();
    }
    res.send(deleteReview);
  } catch (e) {
    res.status(404).send(e);
  }
};

// EXPORT //
module.exports = {
  getAllReviews,
  storeReview,
  getReviews,
  getReviewDetail,
  updateReview,
  deleteReview,
};