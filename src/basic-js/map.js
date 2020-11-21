const array1 = [1, 4, 9, 16];

// 配列の要素毎に()内の処理が行われて、map1に入る
const map1 = array1.map(x => x * 2);

console.log(map1);

// forEachで処理の場合
let map2 = [];

array1.forEach(function(value) {
  map2.push(value * 2);
});

console.log(map2);
