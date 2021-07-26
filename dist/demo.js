"use strict";
exports.__esModule = true;
var child_1 = require("./child");
var default_child_1 = require("./default-child");
var child = new child_1.Child();
var anotherChild = new child_1.AnotherChild();
var defaultChild = new default_child_1["default"]();
var noDefaultClass = new default_child_1.NoDefault();
var Demo = /** @class */ (function () {
    function Demo() {
    }
    Demo.prototype.print = function () {
        var city = 'chennai';
        console.log("Print");
        child.printer();
        anotherChild.printer();
        child_1.demoFunction();
        defaultChild.printer();
        noDefaultClass.printer();
    };
    return Demo;
}());
var demo = new Demo();
demo.print();
