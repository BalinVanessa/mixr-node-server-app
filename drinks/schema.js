import mongoose from "mongoose";

const drinksSchema = new mongoose.Schema({
    idDrink: {type:String, required: true, unique: true},
    strDrink: {type: String, required: true},
    strAlcoholic: Boolean,
    strInstructions: {type: String, required: true},
    ingredients: [String],
    measures: [String],
    dateModified: {type: String, required: true}
},
    { collection: "drinks" });

export default drinksSchema;