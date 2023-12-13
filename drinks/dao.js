import model from "./model.js";

export const createDrink = (drink) => model.create(drink);

export const findAllDrinks = () => model.find();

export const findDrinkById = (idDrink) => model.findOne({idDrink : idDrink});

export const findOneDrinkByName = (drinkName) =>
    model.findOne({ strDrink: drinkName });

export const findAllDrinksByName = (drinkName) => {
    const regex = new RegExp(`^${drinkName}`, 'i');
    const drinks = model.find({strDrink: regex});
    return drinks;
}

export const updateDrink = (idDrink, drink) =>
    model.updateOne({ idDrink: idDrink}, { $set: drink });

export const deleteDrink = (idDrink) => model.deleteOne({ idDrink: idDrink });