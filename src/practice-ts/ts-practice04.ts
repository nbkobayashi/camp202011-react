import console = require("console");

interface Figure {
  height: number;
  weight: number;
}

interface PersonalData extends Figure {}

function calcBmi<T extends Figure>(figure: T): number {
  const bmi = figure.weight / figure.height ** 2;
  return bmi;
}

const data: PersonalData = {
  height: 1.6,
  weight: 42
};

console.log(calcBmi(data));
