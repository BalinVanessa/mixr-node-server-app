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
    const deleteIngredient = async (req, res) => {
        const status = await dao.deleteIngredient(req.params.idIngredient);
        res.json(status);
    };
    const findAllIngredients = async (req, res) => {
        const ingredients = await dao.findAllIngredients();
        res.json(ingredients);
    };
    const findIngredientById = async (req, res) => {
        const ingredient = await dao.findIngredientById(req.params.idIngredient);
        res.json(ingredient);
    };
    const updateIngredient = async (req, res) => {
        const { idIngredient } = req.params;
        const status = await dao.updateIngredient(idIngredient, req.body);
        const currentIngredient = await dao.findIngredientById(idIngredient);
        req.session['currentIngredient'] = currentIngredient;
        res.json(status);
    };
    
    app.post("/api/ingredients", createIngredient);
    app.get("/api/ingredients", findAllIngredients);
    app.get("/api/ingredients/:idIngredient", findIngredientById);
    app.put("/api/ingredients/:idIngredient", updateIngredient);
    app.delete("/api/ingredients/:idIngredient", deleteIngredient);
}

export default IngredientRoutes;

