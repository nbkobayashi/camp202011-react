let order = "ハンバーガー";

function getPrice(order) {
  switch (order) {
    case "ハンバーガー":
      return "110円です";
    case "チーズバーガー":
      return "140円です";
    default:
      return "そんな商品はありません";
  }
}

console.log(getPrice(order));
order = "チーズバーガー";
console.log(getPrice(order));
order = "ビッグマック";
console.log(getPrice(order));
