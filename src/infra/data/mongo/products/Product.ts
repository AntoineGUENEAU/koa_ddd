import { model, Schema } from "mongoose";

const ProductSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
});

export const ProductMongo = model("products", ProductSchema);
