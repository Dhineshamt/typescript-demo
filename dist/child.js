"use strict";
exports.__esModule = true;
exports.demoFunction = exports.AnotherChild = exports.Child = void 0;
var Child = /** @class */ (function () {
    function Child() {
    }
    Child.prototype.printer = function () {
        console.log("Child printer");
    };
    return Child;
}());
exports.Child = Child;
var AnotherChild = /** @class */ (function () {
    function AnotherChild() {
    }
    AnotherChild.prototype.printer = function () {
        console.log("Another printer");
    };
    return AnotherChild;
}());
exports.AnotherChild = AnotherChild;
function demoFunction() {
    console.log('Demo function');
}
exports.demoFunction = demoFunction;
