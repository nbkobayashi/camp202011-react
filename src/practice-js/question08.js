function getMessage(age) {
  if (age >= 20) {
    return age + "歳はお酒が飲めます";
  } else {
    return age + "歳はお酒が飲めません";
  }
}

console.log(getMessage(20));
console.log(getMessage(19));
console.log(getMessage(21));
