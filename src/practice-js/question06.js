let sum = 0;
for (let i = 1; i <= 100; i++) {
  console.log(i);
  if (i % 2 == 1) {
    sum = sum + i;
  }
}

console.log(sum);
