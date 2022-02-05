"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var router = require('@koa/router')();
exports.router = router;
var productController_1 = require("../../controller/productController");
router.get('/products', productController_1.list)
    .get('/products/:id', productController_1.show)
    .put('/products/:id', productController_1.update)
    .post('/products', productController_1.create);
