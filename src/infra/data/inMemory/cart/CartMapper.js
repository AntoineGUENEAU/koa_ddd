"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartMapper = void 0;
var Cart_1 = require("../../../../core/domain/cart/Cart");
var getProducts = function (products) {
    return products.map(function (cartLine) { return ({
        item: cartLine.item,
        quantity: cartLine.quantity,
    }); });
};
var CartMapper = /** @class */ (function () {
    function CartMapper() {
    }
    CartMapper.toDomain = function (raw) {
        return Cart_1.Cart.create({
            id: raw.id,
            products: getProducts(raw.items || []),
        });
    };
    return CartMapper;
}());
exports.CartMapper = CartMapper;
