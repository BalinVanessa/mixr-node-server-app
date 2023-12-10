import model from "./model.js";

export const findAllFavs = () => model.find();

export const createUserFavDrink = (userId, drinkId) =>
    model.create({ user: userId, idDrink: drinkId });

export const deleteUserFavDrink = (userId, drinkId) =>
    model.deleteOne({ user: userId, idDrink: drinkId });

export const findUsersThatFavDrink = (drinkId) =>
    model.find({ idDrink: drinkId }).populate("user");

export const findDrinksThatUserFav = (userId) => model.find({ user: userId });