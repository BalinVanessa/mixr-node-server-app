import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
    idIngredient: { type: String, required: true, unique: true },
    strIngredient: { type: String, required: true, unique: true },
    strDescription: String,
    strType: String,
    strAlcohol: Boolean,
    strABV: String
},
    { collection: "ingredients" });

export default ingredientSchema;