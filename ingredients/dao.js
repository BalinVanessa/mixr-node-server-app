import model from "./model.js";

export const createIngredient = (ingredient) => model.create(ingredient);

export const findAllIngredients = () => model.find();

export const findIngredientById = (ingredientId) => model.findOne({ idIngredient: ingredientId });

export const findIngredientByName = (ingredientName) => {
    const regex = new RegExp(ingredientName, 'i');
    const ingredient = model.findOne({ strIngredient: regex });
    return ingredient;
}

export const findTop5IngredientsByPartialName = (partialName) => {
    // case insensitive regex for potential matches
    const regex = new RegExp(`^${partialName}`, 'i');
    const top5Ingredients = model.find({ strIngredient: regex }).limit(5);
    return top5Ingredients;
}