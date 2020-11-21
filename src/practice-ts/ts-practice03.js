"use strict";
exports.__esModule = true;
var console = require("console");
function calcBmi(data) {
    return data.weight / (data.height * data.height);
}
var data = {
    name: "Dさん",
    age: 50,
    height: 1.7,
    weight: 54
};
console.log(calcBmi(data));
