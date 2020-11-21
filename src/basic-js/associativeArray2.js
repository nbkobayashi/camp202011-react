let animals = { dog: "犬", cat: "猫", lion: "ライオン" };

// 削除前: { dog: '犬', cat: '猫', lion: 'ライオン' }
// 削除後: { dog: '犬', cat: '猫'}
console.log("【delete確認】");
delete animals.lion;
console.log(animals);

// 削除前: { dog: '犬', cat: '猫'}
// 削除後: { cat: '猫'}
console.log("【delete確認】");
delete animals["dog"];
console.log(animals);

// 追加前: { cat: '猫'}
// 追加後: { cat: '猫', tiger: 'トラ' }
console.log("【追加確認】");
animals.tiger = "トラ";
console.log(animals);

// 追加前: { cat: '猫', tiger: 'トラ' }
// 追加後: { cat: '猫', tiger: 'トラ', elephant: '象' }
console.log("【追加確認】");
animals["elephant"] = "象";
console.log(animals);

// 追加前: { cat: '猫', tiger: 'トラ', elephant: '象' }
// 追加後: { cat: '猫', tiger: 'トラ', elephant: '象', toyota: 'プリウス', nissan: 'セレナ' }
const cars = { toyota: "プリウス", nissan: "セレナ" };
console.log("【assign確認】");
const new_animals1 = Object.assign(animals, cars);
console.log(new_animals1);

console.log("【スプレッド確認】");
const new_animals2 = { ...animals, ...cars };
console.log(new_animals2);
