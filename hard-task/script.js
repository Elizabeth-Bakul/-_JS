"use strict";

let string = prompt("Введите строку");

let lineUpgrade = function (string) {
  if (typeof string === "string") {
    string = string.trim();
    if (string.length > 30) {
      string = string.substr(0, 30) + "...";
    }
    return string;
  } else {
    return "Это не строка";
  }
};

console.log(lineUpgrade(string));
console.log(lineUpgrade(5));
console.log(lineUpgrade(true));
