const dataA = {
  name: "Aさん",
  age: 28,
  height: 1.76, //身長
  weight: 65    //体重
};

const dataB = {
  name: "Bさん",
  age: 20,
  height: 1.60, //身長
  weight: 42    //体重
};

function calcBmi(data) {
  return data.weight / (data.height * data.height);
}

console.log(calcBmi(dataA));
console.log(calcBmi(dataB));
