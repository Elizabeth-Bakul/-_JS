"use strict";

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

function game() {
  let hiddenNumber = getRandomInt(1, 100);
  console.log(hiddenNumber);
  let numberOfAttempts = 10;
  function action() {
    if (numberOfAttempts < 1) {
      if (confirm("Попытки закончились, хотите сыграть ещё?")) {
        game();
      } else {
        alert("Игра окончена");
        return;
      }
    } else {
      let estimatedNumber = prompt("Угадай число от 1 до 100");
      console.log(estimatedNumber);
      if (estimatedNumber === null) {
        alert("Игра окончена");
      }
      if (isNumber(estimatedNumber)) {
        numberOfAttempts--;
        if (estimatedNumber > hiddenNumber) {
          alert("Загаданное число меньше. Осталось попыток " + numberOfAttempts);
          action();
        } else if (+estimatedNumber === hiddenNumber) {
          if (confirm("Вы угадали! Хотели бы сыграть ещё?")) {
            game();
          } else {
            alert("Игра окончена");
            return;
          }
        } else {
          alert(
            "Загаданное число больше. Осталось попыток " + numberOfAttempts
          );
          action();
        }
      }
    }
  }
  action();
}

game();
