"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
var Entity_1 = require("../Entity");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(props) {
        return _super.call(this, props, props.id) || this;
    }
    Product.create = function (props) {
        return new Product(props);
    };
    Product.prototype.toDto = function () {
        return {
            id: this.id,
            reference: this.reference,
            name: this.name,
            price: this.price,
            updated_at: this.updated_at,
            created_at: this.created_at,
        };
    };
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "reference", {
        get: function () {
            return this.props.reference;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this.props.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this.props.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "updated_at", {
        get: function () {
            return this.props.updated_at;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "created_at", {
        get: function () {
            return this.props.created_at;
        },
        enumerable: false,
        configurable: true
    });
    return Product;
}(Entity_1.Entity));
exports.Product = Product;
