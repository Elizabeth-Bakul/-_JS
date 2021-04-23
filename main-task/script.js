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
//возможные доходы
const additionalIncomeItem = document.querySelectorAll(
  ".additional_income-item"
);
//Цель
const targetAmount = document.querySelector('.target-amount');
//результат
let budgetDayValue = document.getElementsByClassName("budget_day-value")[0],
  budgetMonthValue = document.getElementsByClassName("budget_month-value")[0],
  expensesMonthValue = document.getElementsByClassName(
    "expenses_month-value"
  )[0],
  additionalIncomeValue = document.getElementsByClassName(
    "additional_income-value"
  )[0],
  additionalExpensesValue = document.getElementsByClassName(
    "additional_expenses-value"
  )[0],
  incomePeriodValue = document.getElementsByClassName("income_period-value")[0],
  periodAmountValue = document.querySelector(".period-amount"),
  placeholderTitle = document.querySelectorAll('[placeholder="Наименование"]'),
  placeholderAmount = document.querySelectorAll('[placeholder="Сумма"]'),
  targetMonthValue = document.getElementsByClassName('target_month-value')[0];
//месячный доход
const salaryAmount = document.querySelector('.salary-amount');
//дополнительный доход
//const incomeTitle = document.querySelector('input.income-title');
//const incomeAmount = document.querySelector('.income-amount');
let incomeItems = document.querySelectorAll(".income-items");
//Возможные расходы
const additionalExpensesItem = document.querySelector('.additional_expenses-item');
//Обязательные расходы
//const expensesTitle = document.querySelector('input.expenses-title');
//const expensesAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll(".expenses-items");

//Период
const peroidSelect = document.querySelector('.period-select');



let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


let appData = {
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  start: function () {
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getInfoDeposit();

    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
    //appData.asking();
  },
  addExpensesBlock: function () {
    let cloneExpenses = expensesItems[0].cloneNode(true);
    cloneExpenses.querySelector(".expenses-title").value = "";
    cloneExpenses.querySelector(".expenses-amount").value = "";
    expensesItems[0].parentNode.insertBefore(cloneExpenses, buttonAddExpenses);
    expensesItems = document.querySelectorAll(".expenses-items");
    if (expensesItems.length === 3) {
      buttonAddExpenses.style.display = "none";
    }
    placeholderTitle = document.querySelectorAll(
      '[placeholder="Наименование"]'
    );
    placeholderAmount = document.querySelectorAll('[placeholder="Сумма"]');
    placeholderTitle.forEach(function (item) {
      item.addEventListener("input", function () {
        item.value = item.value.replace(/[a-zA-Z0-9]/, "");
      });
    });

    placeholderAmount.forEach(function (item) {
      item.addEventListener("input", function () {
        item.value = item.value.replace(/[^0-9]/, "");
      });
    });
  },
  addIncomeBlock: function () {
    let cloneIncomes = incomeItems[0].cloneNode(true);
    cloneIncomes.querySelector(".income-title").value = "";
    cloneIncomes.querySelector(".income-amount").value = "";
    incomeItems[0].parentNode.insertBefore(cloneIncomes, buttonAddIncome);
    incomeItems = document.querySelectorAll(".income-items");
    if (incomeItems.length === 3) {
      buttonAddIncome.style.display = "none";
    }
    placeholderTitle = document.querySelectorAll(
      '[placeholder="Наименование"]'
    );
    placeholderAmount = document.querySelectorAll('[placeholder="Сумма"]');
    placeholderTitle.forEach(function (item) {
      item.addEventListener("input", function () {
        item.value = item.value.replace(/[a-zA-Z0-9]/, "");
      });
    });

    placeholderAmount.forEach(function (item) {
      item.addEventListener("input", function () {
        item.value = item.value.replace(/[^0-9]/, "");
      });
    });
  },
  getExpenses: function () {
    expensesItems.forEach(function (item) {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let cashExpenses = item.querySelector(".expenses-amount").value;
      if (itemExpenses !== "" && cashExpenses !== "") {
        appData.expenses[itemExpenses] = +cashExpenses;
      }
    });
  },
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector(".income-title").value;
      let cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        appData.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in appData.income) {
      appData.incomeMonth += +appData.income[key];
    }
  },
  showResult: function () {
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpenses.join(", ");
    additionalIncomeValue.value = appData.addIncome.join(", ");
    targetMonthValue.value = appData.getTargetMonth();
    incomePeriodValue.value = appData.calcSavedMoney();
    peroidSelect.addEventListener("input", () => {
      appData.updateRangeValue();
      incomePeriodValue.value = appData.calcSavedMoney();
    });
  },
  getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach(function (item) {
      item = item.trim();
      if (item !== "") {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        appData.addIncome.push(itemValue);
      }
    });
  },
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
    appData.addExpenses = addExpenses.toLowerCase().split(", ");
    let arr = [];
    arr = arr.concat(appData.addExpenses);
    for (let i = 0; i < arr.length; i++) {
      let subs = arr[i];
      arr[i] = subs[0].toUpperCase() + subs.slice(1);
    }
    console.log(arr.join(", "));
    appData.deposit = confirm("Есть ли у вас депозит в банке?");
    for (let i = 0; i < 2; i++) {
      let expenses;
      do {
        expenses = prompt("Введите обязательную статью расходов?");
      } while (isNumber(expenses) || expenses === "" || expenses === null);
      let amount = 0;
      do {
        amount = prompt("Во сколько это обойдется?");
      } while (!isNumber(amount));
      appData.expenses[expenses] = +amount;
    }
  },
  getExpensesMonth: function () {
    for (let key in appData.expenses) {
      appData.expensesMonth += appData.expenses[key];
    }
  },
  getBudget: function () {
    appData.budgetMonth =
      appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function () {
    return Math.ceil(targetAmount.value / appData.budgetMonth);
    // if (period > 0) {
    //   //appData.period = period;
    //   return `Цель будет достигнута за: ${period} месяцев`;
    // } else {
    //   return "Цель не будет достигнута";
    // }
  },
  getStatusIncome: function () {
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
  getInfoDeposit: function () {
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
  updateRangeValue: function () {
    periodAmountValue.textContent = peroidSelect.value;
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * peroidSelect.value;
  },
};
buttonCalculate.disabled=true;

salaryAmount.addEventListener(
  "input",
  function() {
    if (salaryAmount.value.trim() !== "" && isNumber(salaryAmount.value)){
      buttonCalculate.disabled = false;
    } else {
      buttonCalculate.disabled = true;
    }
  }
);

placeholderTitle.forEach(function (item) {
  item.addEventListener("input", function () {
    item.value = item.value.replace(/[a-zA-Z0-9]/, "");
  });
});

placeholderAmount.forEach(function (item) {
  item.addEventListener("input", function () {
    item.value = item.value.replace(/[^0-9]/, "");
  });
});


buttonCalculate.addEventListener('click', appData.start);
buttonAddExpenses.addEventListener("click", appData.addExpensesBlock);
buttonAddIncome.addEventListener("click", appData.addIncomeBlock);
peroidSelect.addEventListener("input", appData.updateRangeValue);

