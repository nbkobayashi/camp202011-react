import console = require("console");

type PhisicalData = {
  name: string;
  age: number;
  height: number;
  weight: number;
};

function calcBmi(data: PhisicalData) {
  return data.weight / (data.height * data.height);
}

let data = {
  name: "Dさん",
  age: 50,
  height: 1.7,
  weight: 54
};

console.log(calcBmi(data));
