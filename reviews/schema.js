import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "users",
        },
        idDrink: String,
        reviewText: String,
        numStars: {type: Number, min: 0, max: 5}
    },
    
    {
        collection: "reviews",
    }
);

export default schema;