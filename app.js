import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
import session from "express-session";
import DrinksRoutes from "./drinks/routes.js";
import FavoritesRoutes from "./favorites/routes.js";
import FollowsRoutes from "./follows/routes.js";
import IngredientRoutes from "./ingredients/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/mixr';
mongoose.connect(CONNECTION_STRING);

const app = express();

app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);


const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));

app.use(express.json());

UserRoutes(app);
DrinksRoutes(app);
FavoritesRoutes(app);
FollowsRoutes(app);
IngredientRoutes(app);

app.listen(4000);