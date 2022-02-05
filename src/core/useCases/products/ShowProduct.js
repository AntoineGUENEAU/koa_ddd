"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ShowProduct = void 0;
require("reflect-metadata");
var inversify_1 = require("inversify");
var types_1 = require("../../../types");
var ShowProduct = /** @class */ (function () {
    function ShowProduct() {
    }
    ShowProduct.prototype.invoke = function (idProduct) {
        return this.repository.show(idProduct);
    };
    __decorate([
        inversify_1.inject(types_1.TYPES.ProductRepositoryInterface)
    ], ShowProduct.prototype, "repository");
    ShowProduct = __decorate([
        inversify_1.injectable()
    ], ShowProduct);
    return ShowProduct;
}());
exports.ShowProduct = ShowProduct;