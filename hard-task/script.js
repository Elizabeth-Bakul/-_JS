"use strict";
let num = 266219;

function getMultiNumber(num) {
  let mul = 1;
  let tmp = 0;
  while (num) {
    tmp = num % 10;
    num = (num - tmp) / 10;
    mul *= tmp;
  }
  return mul;
}
let result = getMultiNumber(num);
console.log(result);
console.log(result ** 3);
console.log(String(result ** 3).slice(0,2));