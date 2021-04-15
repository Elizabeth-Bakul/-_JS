"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


function game(){
  let hiddenNumber = getRandomInt(1, 100);
  function action(){
    let estimatedNumber = prompt("Угадай число от 1 до 100");
    if (estimatedNumber === null){
      alert("Игра окончена");
    }
    if (isNumber(estimatedNumber)){
      if (estimatedNumber > hiddenNumber) {
        alert("Загаданное число меньше");
        action();
      } else if (+estimatedNumber === hiddenNumber) {
        if (confirm("Вы угадали! Сыграем ещё?")) {
          game();
        } else {
          alert("Игра окончена");
          return;
        }
      } else {
        alert("Загаданное число больше");
        action();
      }
      } 
    }
    action();
  }

game();