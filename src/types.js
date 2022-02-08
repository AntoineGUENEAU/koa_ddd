"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPES = void 0;
var TYPES = {
    //Infra
    Database: Symbol.for('Database'),
    ServerInterface: Symbol.for("ServerInterface"),
    // Domain <===> Infra
    ProductRepositoryInterface: Symbol.for("ProductRepositoryInterface"),
    CartRepositoryInterface: Symbol.for("CartRepositoryInterface"),
    UserRepositoryInterface: Symbol.for("UserRepositoryInterface"),
};
exports.TYPES = TYPES;
