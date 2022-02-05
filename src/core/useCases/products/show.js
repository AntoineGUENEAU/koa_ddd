"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowProduct = void 0;
var productRepository_1 = require("../../../infra/data/inMemory/products/productRepository");
var inversify_1 = require("inversify");
var types_1 = require("../../../types");
var ShowProduct = /** @class */ (function () {
    function ShowProduct() {
    }
    ShowProduct.prototype.invoke = function (idProduct) {
        return this.repository.show(idProduct);
    };
    __decorate([
        (0, inversify_1.inject)(types_1.TYPES.ProductRepositoryInterface),
        __metadata("design:type", productRepository_1.ProductRepository)
    ], ShowProduct.prototype, "repository", void 0);
    ShowProduct = __decorate([
        (0, inversify_1.injectable)()
    ], ShowProduct);
    return ShowProduct;
}());
exports.ShowProduct = ShowProduct;
