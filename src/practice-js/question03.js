let age = 21;
let order = "ハンバーガー";

function isGetLicense(age) {
  if (age < 18) {
    return "未成年です。車の免許は取得できません。";
  } else if (age >= 20) {
    return "成人です。車の免許は取得できます。";
  } else {
    return "未成年です。車の免許は取得できます。";
  }
}

function getPrice(order) {
  if (order == "ハンバーガー") {
    return "110円です";
  } else if (order == "チーズバーガー") {
    return "140円です";
  } else {
    return "そんな商品はありません";
  }
}

console.log(isGetLicense(age));
age = 17;
console.log(isGetLicense(age));
age = 19;
console.log(isGetLicense(age));

console.log(getPrice(order));
order = "チーズバーガー";
console.log(getPrice(order));
order = "ビッグマック";
console.log(getPrice(order));
