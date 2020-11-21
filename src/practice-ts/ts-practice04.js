"use strict";
exports.__esModule = true;
var console = require("console");
function calcBmi(figure) {
    var bmi = figure.weight / Math.pow(figure.height, 2);
    return bmi;
}
var data = {
    height: 1.6,
    weight: 42
};
console.log(calcBmi(data));
