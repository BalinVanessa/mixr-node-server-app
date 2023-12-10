import * as dao from "./dao.js";

function FavoritesRoutes(app) {
    const findAllFavs = async (req, res) => {
        const favs = await dao.findAllFavs();
        res.json(favs);
    };
    const createUserFavDrink = async (req, res) => {
        const userId = req.params.userId;
        const idDrink = req.params.idDrink;
        const favs = await dao.createUserFavDrink(userId, idDrink);
        res.json(favs);
    };


    const deleteUserFavDrink = async (req, res) => {
        const status = await dao.deleteUserFavDrink(req.params.idDrink);
        res.json(status);
    };


    const findUsersThatFavDrink = async (req, res) => {
        const idDrink = req.params.idDrink;

        const favs = await dao.findUsersThatFavDrink(idDrink);
        res.json(favs);
    };
    const findDrinksThatUserFav = async (req, res) => {
        const userId = req.params.userId;
        const favs = await dao.findDrinksThatUserFav(userId);
        res.json(favs);
    };
    app.get("/api/favorites", findAllFavs);
    app.post("/api/users/:userId/favorites/:idDrink", createUserFavDrink);
    app.delete("/api/users/:userId/favorites/:idDrink", deleteUserFavDrink);
    app.get("/api/favorites/:idDrink/users", findUsersThatFavDrink);
    app.get("/api/users/:userId/favorites", findDrinksThatUserFav);
}

export default FavoritesRoutes;