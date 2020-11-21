const pysicalDataList = [
  {
    name: "Aさん",
    age: 28,
    height: 1.76,
    weight: 65
  },
  {
    name: "Bさん",
    age: 34,
    height: 1.85,
    weight: 90
  },
  {
    name: "Cさん",
    age: 40,
    height: 1.68,
    weight: 52,
  }
];

function calcBmi(data) {
  return data.weight / (data.height * data.height);
}

function conversion(physicalData) {
  let map = [];
  physicalData.forEach(function(value) {
    map.push({name: value.name, bmi: calcBmi(value)});
  });
  return map;
}

console.log(conversion(pysicalDataList));
