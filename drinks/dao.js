import model from "./model.js";

export const createDrink = (drink) => model.create(drink);

export const findAllDrinks = () => model.find();

export const findDrinkById = (idDrink) => model.findById(idDrink);

export const findOneDrinkByName = (drinkName) =>
    model.findOne({ strDrink: drinkName });

export const updateDrink = (idDrink, drink) =>
    model.updateOne({ idDrink: idDrink}, { $set: drink });

export const deleteDrink = (idDrink) => model.deleteOne({ idDrink: idDrink });