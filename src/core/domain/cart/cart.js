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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var product_1 = require("../product/product");
var entity_1 = require("../entity");
var Cart = /** @class */ (function (_super) {
    __extends(Cart, _super);
    function Cart(_a) {
        var id = _a.id, data = __rest(_a, ["id"]);
        return _super.call(this, data, id) || this;
    }
    Cart.create = function (props) {
        var cart = new Cart(props);
        cart.products = cart.props.products || [];
        return cart;
    };
    Cart.prototype.unmarshal = function () {
        return {
            id: this.id,
            items: this.products.map(function (product) { return ({
                item: product.item.unmarshal(),
                quantity: product.quantity,
            }); }),
            totalPrice: this.totalPrice,
        };
    };
    Object.defineProperty(Cart.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (products) {
            this._products = products.map(function (p) { return ({
                item: p.item instanceof product_1.Product ? p.item : product_1.Product.create(p.item),
                quantity: p.quantity,
            }); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "countItems", {
        get: function () {
            return this._products.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cart.prototype, "totalPrice", {
        get: function () {
            return this.products.reduce(function (carry, line) {
                return carry + line.item.price;
            }, 0);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.add = function (item, quantity) {
        this.products = __spreadArray(__spreadArray([], this.products, true), [{ item: item, quantity: quantity }], false);
    };
    return Cart;
}(entity_1.Entity));
exports.Cart = Cart;