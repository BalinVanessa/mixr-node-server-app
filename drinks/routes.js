import * as dao from "./dao.js";

function DrinksRoutes(app) {
    const createDrink = async (req, res) => {
        const drink = await dao.createDrink(req.body);
        res.json(drink);
    };
    const deleteDrink = async (req, res) => {
        const status = await dao.deleteDrink(req.params.idDrink);
        res.json(status);
    };
    const findAllDrinks = async (req, res) => {
        const drinks = await dao.findAllDrinks();
        res.json(drinks);
    };
    const findDrinkById = async (req, res) => {
        const drink = await dao.findDrinkById(req.params.idDrink);
        res.json(drink);
    };
    const updateDrink = async (req, res) => {
        const { idDrink } = req.params;
        const status = await dao.updateDrink(idDrink, req.body);
        const currentDrink = await dao.findDrinkById(idDrink);
        req.session['currentDrink'] = currentDrink;
        res.json(status);
    };
    const findDrinksByName = async (req, res) => {
        const name = req.params['drinkName'];
        const drinks = await dao.findAllDrinksByName(name);
        res.json(drinks);
    }
    
    app.post("/api/drinks", createDrink);
    app.get("/api/drinks", findAllDrinks);
    app.get("/api/drinks/:idDrink", findDrinkById);
    app.get("/api/drinks/name/:drinkName", findDrinksByName);
    app.put("/api/drinks/:idDrink", updateDrink);
    app.delete("/api/drinks/:idDrink", deleteDrink);
}

export default DrinksRoutes;