import * as dao from "./dao.js";

function ReviewsRoutes(app) {
    const findAllReviews = async (req, res) => {
        const reviews = await dao.findAllReviews();
        res.json(reviews);
    };

    const createReview = async (req, res) => {
        const review = await dao.createUserReviewDrink(req.body);
        res.json(review);
    };

    const deleteReview = async (req, res) => {
        const status = await dao.deleteReview(req.params.reviewId);
        res.json(status);
    };

    const findReviewsForDrink = async (req, res) => {
        const idDrink = req.params.idDrink;

        const reviews = await dao.findReviewsForDrink(idDrink);
        res.json(reviews);
    };

    const findReviewsFromUser = async (req, res) => {
        const userId = req.params.userId;
        const reviews = await dao.findReviewsFromUser(userId);
        res.json(reviews);
    };

    const findReviewById = async (req, res) => {
        const { reviewId } = req.params;
        const review = await dao.findReviewById(reviewId);
        res.json(review);
    }

    const editReview = async (req, res) => {
        const { reviewId } = req.params;
        const status = await dao.editReview(reviewId, req.body);
        const review = await dao.findReviewById(userId);
        res.json(review);
    }

    app.get("/api/reviews", findAllReviews);
    app.post("/api/reviews", createReview);
    app.get("/api/reviews/:reviewId", findReviewById);
    app.put("/api/reviews/:reviewId", editReview);
    app.delete("/api/reviews/:reviewId", deleteReview);
    app.get("/api/reviews/drinks/:idDrink", findReviewsForDrink);
    app.get("/api/reviews/users/:userId", findReviewsFromUser);
}

export default ReviewsRoutes;