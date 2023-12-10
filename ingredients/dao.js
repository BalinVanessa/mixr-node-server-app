import model from "./model.js";

export const createIngredient = (ingredient) => model.create(ingredient);

export const findAllIngredients = () => model.find();

export const findIngredientById = (ingredientId) => model.findById(ingredientId);

export const findIngredientByName = (ingredientName) =>
    model.findOne({ strIngredient: ingredientName });

export const updateIngredient = (ingredientId, ingredient) =>
    model.updateOne({ _id: ingredientId }, { $set: ingredient });
    
export const deleteIngredient = (ingredientId) => model.deleteOne({ _id: ingredientId });