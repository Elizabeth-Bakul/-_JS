"use strict";
let money = +prompt("Ваш месячный доход?");
let income = "фриланс";
let addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
let deposit = confirm("Есть ли у вас депозит в банке?");
let mission = 150000;
let period = 11;
let expenses1 = prompt("Введите обязательную статью расходов?");
let amount1 = +prompt("Во сколько это обойдется?");
let expenses2 = prompt("Введите обязательную статью расходов?");
let amount2 = +prompt("Во сколько это обойдется?");

//Тип данных
let showTypeOf = function (data) {
  console.log(data, typeof data);
};

//Обязательные расходы
let getExpensesMonth = function (amount1, amount2) {
  return amount1 + amount2;
};

//Накопления за месяц
let getAccumulatedMonth = function (money, expense) {
  return money - expense;
};

//Период, для достижения цели
let getTargetMonth = function (accumulated, accumulatedMonth) {
  return Math.ceil(accumulated / accumulatedMonth);
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

let expense = getExpensesMonth(amount1, amount2);
console.log("Расходы за месяц :" + expense);

let accumulatedMonth = getAccumulatedMonth(money, expense);
console.log("Бюджет на месяц: " + accumulatedMonth);

console.log("Планируемый период: " + getTargetMonth(mission, accumulatedMonth));

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log("Бюджет в день: ", budgetDay);

console.log(getStatusIncome(budgetDay));