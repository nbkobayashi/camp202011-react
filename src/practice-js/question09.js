function showList(title, list) {
  console.log("--- <" + title + "> ---");
  for (let i = 0; i < list.length; i++) {
    console.log(i + ": <" + list[i] + ">");
  }
}

const staffs = ["Kazuma", "Tomonori", "Noriya", "Toru"];
const attractions  = ["焼走り", "サラダファーム", "安比高原"];

showList("スタッフ一覧", staffs);
showList("観光名所一覧", attractions);