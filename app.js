import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
import DrinksRoutes from "./drinks/routes.js";
import FavoritesRoutes from "./favorites/routes.js";
import FollowsRoutes from "./follows/routes.js";
import IngredientRoutes from "./ingredients/routes.js";
import FilterRoutes from "./filters/routes.js";
import ReviewsRoutes from "./reviews/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/mixr';
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL || "http://localhost:3000"
    })
);


const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development" && process.env.NODE_ENV !== undefined) {
    console.log("In production environment");
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.set("trust proxy", 1);
app.use(session(sessionOptions));

app.use(express.json());


UserRoutes(app);
DrinksRoutes(app);
FavoritesRoutes(app);
FollowsRoutes(app);
IngredientRoutes(app);
FilterRoutes(app);
ReviewsRoutes(app);

app.listen(4000);