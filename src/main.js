"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("./container");
var logger = require('koa-logger');
var koaBody = require('koa-body');
var validate = require('koa-validation');
var productsRoutes_1 = require("./application/http/routes/products/productsRoutes");
var Koa = require('koa');
var app = module.exports = new Koa();
app.use(logger());
app.use(koaBody());
app.use(validate());
app.use(productsRoutes_1.router.routes());
container_1.container;
app.listen(3000);
