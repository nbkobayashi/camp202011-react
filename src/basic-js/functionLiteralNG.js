let member = 3;
let price = 1000;

// 先にtotalを呼ぶ
console.log(`合計金額は${total(member, price)}円です`);

let total = function(member, price) {
  return member * price;
};
