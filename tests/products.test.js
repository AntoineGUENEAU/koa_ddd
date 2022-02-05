"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = require("../src/container");
var ListProducts_1 = require("../src/core/useCases/product/ListProducts");
var ShowProduct_1 = require("../src/core/useCases/product/ShowProduct");
var CreateProduct_1 = require("../src/core/useCases/product/CreateProduct");
var UpdateProduct_1 = require("../src/core/useCases/product/UpdateProduct");
test("should list the products", function () { return __awaiter(void 0, void 0, void 0, function () {
    var products;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, container_1.container.resolve(ListProducts_1.ListProducts).invoke()];
            case 1:
                products = _a.sent();
                expect(products.length).toBe(2);
                return [2 /*return*/];
        }
    });
}); });
test("should display a product", function () { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, container_1.container.resolve(ShowProduct_1.ShowProduct).invoke("id2")];
            case 1:
                product = _a.sent();
                expect(product.id).toBe("id2");
                expect(product.name).toBe("tv");
                expect(product.reference).toBe("ref2");
                expect(product.price).toBe(56);
                return [2 /*return*/];
        }
    });
}); });
test("should return none if the id product doesn't match", function () { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, container_1.container.resolve(ShowProduct_1.ShowProduct).invoke("doest_exist")];
            case 1:
                product = _a.sent();
                expect(product).toBeNull();
                return [2 /*return*/];
        }
    });
}); });
test("should create a new product", function () { return __awaiter(void 0, void 0, void 0, function () {
    var product;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, container_1.container.resolve(CreateProduct_1.CreateProduct).invoke({
                    id: "id1",
                    name: "name1",
                    reference: "ref1",
                    price: 45,
                })];
            case 1:
                product = _a.sent();
                expect(product.id).toBe("id1");
                expect(product.name).toBe("name1");
                expect(product.reference).toBe("ref1");
                expect(product.price).toBe(45);
                return [2 /*return*/];
        }
    });
}); });
test("should update a product", function () { return __awaiter(void 0, void 0, void 0, function () {
    var productToUpdated, newName, newProductDta, product, date1, date2, duration;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, container_1.container.resolve(ShowProduct_1.ShowProduct).invoke("id1")];
            case 1:
                productToUpdated = _a.sent();
                newName = 'name_updated';
                newProductDta = __assign(__assign({}, productToUpdated), { name: newName });
                return [4 /*yield*/, container_1.container.resolve(UpdateProduct_1.UpdateProduct).invoke(newProductDta, newProductDta.id)];
            case 2:
                product = _a.sent();
                date1 = new Date();
                date2 = product.updated_at;
                duration = Math.abs(date2 - date1);
                expect(duration).toBeLessThan(500);
                expect(product.name).toBe(newName);
                return [2 /*return*/];
        }
    });
}); });
