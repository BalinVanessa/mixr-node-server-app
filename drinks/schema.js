import mongoose from "mongoose";

const drinksSchema = new mongoose.Schema({
    idDrink: {type:String, required: true, unique: true},
    strDrink: {type: String, required: true},
    strAlcoholic: String,
    strInstructions: {type: String, required: true},
    ingredients: [String],
    measures: [String],
    dateModified: {type: String, required: true},
    mixologist: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }
},
    { collection: "drinks" });

export default drinksSchema;