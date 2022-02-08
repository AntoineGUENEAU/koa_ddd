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
exports.User = void 0;
var Entity_1 = require("../Entity");
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(props) {
        return _super.call(this, props, props.id) || this;
    }
    User.create = function (props) {
        return new User(props);
    };
    User.prototype.toDto = function () {
        return {
            id: this.id,
            login: this.login,
            firstname: this.firstname,
            lastname: this.lastname,
            email: this.email
        };
    };
    Object.defineProperty(User.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "firstname", {
        get: function () {
            return this.props.firstname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "lastname", {
        get: function () {
            return this.props.lastname;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "login", {
        get: function () {
            return this.props.login;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this.props.email;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "password", {
        get: function () {
            return this.props.password;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}(Entity_1.Entity));
exports.User = User;
