"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KoaServer = void 0;
require("reflect-metadata");
var productsRoutes_1 = require("./routes/products/productsRoutes");
var inversify_1 = require("inversify");
var logger = require("koa-logger");
var koaBody = require("koa-body");
var validate = require("koa-validation");
var Koa = require("koa");
var app = (module.exports = new Koa());
var session = require('koa-session');
var passport = require('koa-passport');
var KoaServer = /** @class */ (function () {
    function KoaServer() {
    }
    KoaServer.prototype.start = function () {
        app.keys = ['super-secret-key'];
        app.use(session(app));
        app.use(logger());
        app.use(koaBody());
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(validate());
        app.use(productsRoutes_1.router.routes());
        app.listen(3000);
    };
    KoaServer = __decorate([
        (0, inversify_1.injectable)()
    ], KoaServer);
    return KoaServer;
}());
exports.KoaServer = KoaServer;
