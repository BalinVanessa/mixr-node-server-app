import model from "./model.js";

export const findAllReviews = () => model.find();

export const createUserReviewDrink = (review) =>
    model.create(review);

export const deleteUserReviewDrink = (reviewId) =>
    model.deleteOne({ _id: reviewId });

export const findReviewsForDrink = (drinkId) =>
    model.find({ idDrink: drinkId });

export const findReviewsFromUser = (userId) => model.find({ user: userId });

export const editReview = (idDrink, review) =>
    model.updateOne({ idDrink: idDrink }, { $set: review });