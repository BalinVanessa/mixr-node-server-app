import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("ingredients", schema);
export default model;