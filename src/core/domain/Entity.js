"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = void 0;
var cuid_1 = require("cuid");
var Entity = /** @class */ (function () {
    function Entity(props, id) {
        this._id = id ? id : (0, cuid_1.default)();
        this.props = props;
    }
    return Entity;
}());
exports.Entity = Entity;
