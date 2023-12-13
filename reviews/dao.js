import model from "./model.js";

export const findAllReviews = () => model.find().sort({date: -1});

export const findReviewById = (reviewId) =>
    model.findById(reviewId);

export const createReview = (review) =>
    model.create(review);

export const deleteReview = (reviewId) =>
    model.deleteOne({ _id: reviewId });

export const findReviewsForDrink = (drinkId) =>
    model.find({ idDrink: drinkId }).sort({date: -1});

export const findReviewsFromUser = (userId) => model.find({ user: userId }).sort({date: -1});

export const editReview = (reviewId, review) =>
    model.updateOne({ _id: reviewId }, { $set: review });