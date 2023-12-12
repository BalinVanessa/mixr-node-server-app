import model from "./model.js";

export const createIngredient = (ingredient) => model.create(ingredient);

export const findAllIngredients = () => model.find();

export const findIngredientById = (ingredientId) => model.findById(ingredientId);

export const findIngredientByName = (ingredientName) =>
    model.findOne({ strIngredient: ingredientName });

export const findTop5IngredientsByPartialName = (partialName) => {
    // case insensitive regex for potential matches
    const regex = new RegExp(`^${partialName}`, 'i'); 
    const top5Ingredients = model.find({ strIngredient: regex }).limit(5);
    return top5Ingredients;
}