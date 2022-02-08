"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMongo = void 0;
var mongoose_1 = require("mongoose");
var ProductSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
});
exports.ProductMongo = (0, mongoose_1.model)("products", ProductSchema);
