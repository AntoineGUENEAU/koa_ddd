"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
var inversify_1 = require("inversify");
var types_1 = require("./types");
var productRepository_1 = require("./infra/data/inMemory/products/productRepository");
var container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.ProductRepositoryInterface).to(productRepository_1.ProductRepository);
