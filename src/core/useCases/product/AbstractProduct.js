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
exports.AbstractProduct = void 0;
var inversify_1 = require("inversify");
var types_1 = require("../../../types");
var AbstractProduct = /** @class */ (function () {
    function AbstractProduct() {
    }
    __decorate([
        (0, inversify_1.inject)(types_1.TYPES.ProductRepositoryInterface),
        __metadata("design:type", Object)
    ], AbstractProduct.prototype, "repository", void 0);
    AbstractProduct = __decorate([
        (0, inversify_1.injectable)()
    ], AbstractProduct);
    return AbstractProduct;
}());
exports.AbstractProduct = AbstractProduct;
