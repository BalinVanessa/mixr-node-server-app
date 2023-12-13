import * as dao from "./dao.js";

function IngredientRoutes(app) {
    const createIngredient = async (req, res) => {
        const ingred = await dao.findIngredientByName(
            req.body.name);
        if (ingred) {
            res.status(400).json(
                { message: "Ingredient already exists!" });
        }
        const ingredient = await dao.createIngredient(req.body);
        res.json(ingredient);
    };
    const findAllIngredients = async (req, res) => {
        const ingredients = await dao.findAllIngredients();
        res.json(ingredients);
    };
    const findIngredientById = async (req, res) => {
        const ingredient = await dao.findIngredientById(req.query.id);
        res.json(ingredient);
    };
    const findIngredientByName = async (req, res) => {
        const ingredient = await dao.findIngredientByName(req.query.name);
        res.json(ingredient);
    }
    const findTop5IngredientsByPartialName = async (req, res) => {
        const response = await dao.findTop5IngredientsByPartialName(req.params['partialName']);
        res.json(response);
    }

    app.post("/api/ingredients", createIngredient);
    app.get("/api/ingredients", findAllIngredients);
    app.get("/api/ingredients/id", findIngredientById);
    app.get("/api/ingredients/name", findIngredientByName);
    app.get("/api/ingredients/:partialName", findTop5IngredientsByPartialName);
}

export default IngredientRoutes;

