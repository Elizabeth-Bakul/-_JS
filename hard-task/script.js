"use strict";
console.log("Task 1");
let arr = ["3458", "4356", "345678", "1234", "26668", "4555890", "22234434"];

console.log("Вариант 1");
arr.forEach(function (item) {
  if (item.charAt(0) === "2" || item.charAt(0) === "4") {
    console.log(item);
  }
});

console.log("Вариант 2");
arr.forEach(function (item) {
  if (item.startsWith("2") || item.startsWith("4")) {
    console.log(item);
  }
});

console.log("Task 2");
console.log("Вариант 1");
let n = 100;

nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      continue nextPrime;
    }
  }
  console.log("Простое число " + i + ".Делители числа 1 и " + i);
}
console.log("Вариант 2");
for (let i = 2; i <= n; i++) {
  let j = 2;
  let flag = false;
  while (j < i && !flag) {
    if (i % j === 0) {
      flag = true;
    }
    j++;
  }
  if (!flag) {
    console.log("Простое число " + i + ".Делители числа 1 и " + i);
  }
}
console.log("Вариант 3 - Решето Эратосфена");
let prime = Array(101).fill(true);
for (var i = 2; i < 100; ++i) {
  if (prime[i]) {
    console.log("Простое число " + i + ".Делители числа 1 и " + i);
    for (var j = i * i; j < 100; j += i) {
      prime[j] = false;
    }
  }
}
