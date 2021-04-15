"use strict";
let money; 
let income = "фриланс";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 150000;
let expenses = [];
//Тип данных
let showTypeOf = function (data) {
  console.log(data, typeof data);
};

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  }
  while (!isNumber(money));
};
start();
//Обязательные расходы
let getExpensesMonth = function () {
  let sum = 0;
  for (let i=0; i<2; i++){
    expenses[i] = prompt("Введите обязательную статью расходов?");
    let amount = 0;
    do {
      amount = prompt("Во сколько это обойдется?");
    } while (!isNumber(amount));
    sum+= +amount;
  }
  return sum;
};

//Накопления за месяц
let getAccumulatedMonth = function (money, expense) {
  return money - expense;
};

//Период, для достижения цели
let getTargetMonth = function (accumulated, accumulatedMonth) {
  let period = Math.ceil(accumulated / accumulatedMonth);
  if (period > 0) {
    return (`Цель будет достигнута за: ${period} месяцев`);
  } else {
    return("Цель не будет достигнута");
  }

};
//Статус
let getStatusIncome = function (budget) {
  if (budget >= 1200) {
    return "У вас высокий уровень дохода";
  } else if (budget >= 600) {
    return "У вас средний уровень дохода";
  } else if (budget >= 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else {
    return "Что то пошло не так";
  }
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

let array = addExpenses.toLowerCase().split(", ");
console.log(array);

let expensesAmount = getExpensesMonth();
console.log("Расходы за месяц :" + expensesAmount);

let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
console.log("Бюджет на месяц: " + accumulatedMonth);

console.log(getTargetMonth(mission, accumulatedMonth));

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет в день: ", budgetDay);

console.log(getStatusIncome(budgetDay));