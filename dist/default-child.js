"use strict";
exports.__esModule = true;
exports.NoDefault = void 0;
var default_1 = /** @class */ (function () {
    function default_1() {
    }
    default_1.prototype.printer = function () {
        console.log('Default Class');
    };
    return default_1;
}());
exports["default"] = default_1;
var NoDefault = /** @class */ (function () {
    function NoDefault() {
    }
    NoDefault.prototype.printer = function () {
        console.log('No Default class');
    };
    return NoDefault;
}());
exports.NoDefault = NoDefault;
