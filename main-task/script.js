"use strict";

const buttonCalculate = document.getElementById('start');
const buttonCancel = document.getElementById('cancel');

const buttonAddIncome = document.getElementsByTagName('button')[0];
const buttonAddExpenses = document.getElementsByTagName("button")[1];
//Депозит
const depositCheck =  document.querySelector('#deposit-check');
const depositAmount = document.querySelector('.deposit-amount');
const depositPercent = document.querySelector('.deposit-percent');
const depositBank = document.querySelector('.deposit-bank');
console.log(depositBank);
//возможные доходы
const additionalIncomeItems = document.querySelectorAll(
  ".additional_income-item"
);
//Цель
const targetAmount = document.querySelector('.target-amount');
//результат
const values = document.querySelectorAll('[class*="-value"]');
//месячный доход
const salaryAmount = document.querySelector('.salary-amount');
//дополнительный доход
const incomeTitle = document.querySelector('input.income-title');
const incomeAmount = document.querySelector('.income-amount');
//Возможные расходы
const additionalIncomeItem = document.querySelector('.additional_expenses-item');
//Обязательные расходы
const expensesTitle = document.querySelector('input.expenses-title');
const expensesAmount = document.querySelector('.expenses-amount');

//Период
const peroidSelect = document.querySelector('.period-select');

/* let money;

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let start = function () {
  do {
    money = prompt("Ваш месячный доход?");
  } while (!isNumber(money));
};

start();

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  budget: +money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  period: 3,
  asking: function () {

    if (confirm("Есть ли у вас дополнительный источник заработка?")) {
      let itemIncome;
      do {
        itemIncome = prompt(
          "Какой у вас есть дополнительный заработок?",
          "Таксую"
        );
      } while (
        isNumber(itemIncome) ||
        itemIncome === "" ||
        itemIncome === null
      );
      let cashIncome = 0;
      do {
        cashIncome = prompt("Сколько в месяц вы на этом зарабатываете", 10000);
      } while (!isNumber(cashIncome));
      appData.income[itemIncome] = +cashIncome;
    }

    let addExpenses = prompt(
      "Перечислите возможные расходы за рассчитываемый период через запятую"
    );
    appData.addExpenses= addExpenses.toLowerCase().split(", ");
    let arr = [];
    arr=arr.concat(appData.addExpenses); 
    for (let i = 0; i < arr.length; i++) {
      let subs = arr[i];
      arr[i] = subs[0].toUpperCase() + subs.slice(1);
    }
    console.log(arr.join(", "));
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    for(let i=0; i<2; i++){
      let expenses;
      do {
        expenses = prompt("Введите обязательную статью расходов?");
      } while (isNumber(expenses) || expenses === "" || expenses === null);
      let amount = 0;
        do {
          amount = prompt("Во сколько это обойдется?");
        }
        while(!isNumber(amount));
        appData.expenses[expenses]= +amount;
    }
  },
  getExpensesMonth: function() {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getBudget: function(){
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function() {
    let period = Math.ceil(appData.mission / appData.budgetMonth);
    if (period > 0) {
      //appData.period = period;
      return `Цель будет достигнута за: ${period} месяцев`;
    } else {
      return "Цель не будет достигнута";
    }
  },
  getStatusIncome: function(){
    if (appData.budgetDay >= 1200) {
      return "У вас высокий уровень дохода";
    } else if (appData.budgetDay >= 600) {
      return "У вас средний уровень дохода";
    } else if (appData.budgetDay >= 0) {
      return "К сожалению у вас уровень дохода ниже среднего";
    } else {
      return "Что то пошло не так";
    }
  },
  getInfoDeposit: function() {
    if (appData.deposit) {
      let percent;
      let liveSaving;
      do {
        percent = prompt("Какой годовой процент?");
      } while (!isNumber(percent));
      appData.percentDeposit = +percent;
      do {
        liveSaving = prompt("Какая сумма заложена?");
      } while (!isNumber(liveSaving));
      appData.moneyDeposit = +liveSaving;
    }
    
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getInfoDeposit();
appData. getBudget();
console.log("Расходы за месяц: ", appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log("Уровень дохода", appData.getStatusIncome());
console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
  console.log(key, appData[key]);
} */