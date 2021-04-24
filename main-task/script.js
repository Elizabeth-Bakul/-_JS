"use strict";

const buttonCalculate = document.getElementById("start");
const buttonCancel = document.getElementById("cancel");

const buttonAddIncome = document.getElementsByTagName("button")[0];
const buttonAddExpenses = document.getElementsByTagName("button")[1];
//Депозит
const depositCheck = document.querySelector("#deposit-check");
const depositAmount = document.querySelector(".deposit-amount");
const depositPercent = document.querySelector(".deposit-percent");
const depositBank = document.querySelector(".deposit-bank");
//возможные доходы
const additionalIncomeItem = document.querySelectorAll(
  ".additional_income-item"
);
//Цель
const targetAmount = document.querySelector(".target-amount");
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
  targetMonthValue = document.getElementsByClassName("target_month-value")[0];
//месячный доход
const salaryAmount = document.querySelector(".salary-amount");
//дополнительный доход
//const incomeTitle = document.querySelector('input.income-title');
//const incomeAmount = document.querySelector('.income-amount');
let incomeItems = document.querySelectorAll(".income-items");
//Возможные расходы
const additionalExpensesItem = document.querySelector(
  ".additional_expenses-item"
);
//Обязательные расходы
//const expensesTitle = document.querySelector('input.expenses-title');
//const expensesAmount = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll(".expenses-items");

//Период
const peroidSelect = document.querySelector(".period-select");

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};


const AppData = function () {
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.addExpenses = [];
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;
  this.expensesMonth = 0;
};

AppData.prototype.start = function () {
  console.log('click');
  this.budget = +salaryAmount.value;

  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getInfoDeposit();

  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.showResult();
  buttonCalculate.style.display = "none";
  buttonCancel.style.display = "block";
  document.querySelectorAll(".data input[type=text]").forEach((item) => {
    item.disabled = true;
  });
  document.querySelectorAll(".result input[type=text]").forEach((item) => {
    item.disabled = true;
  });
  buttonAddIncome.setAttribute("disabled", "true");
  buttonAddExpenses.setAttribute("disabled", "true");
};

AppData.prototype.addExpensesBlock = function () {
  let cloneExpenses = expensesItems[0].cloneNode(true);
  cloneExpenses.querySelector(".expenses-title").value = "";
  cloneExpenses.querySelector(".expenses-amount").value = "";
  expensesItems[0].parentNode.insertBefore(cloneExpenses, buttonAddExpenses);
  expensesItems = document.querySelectorAll(".expenses-items");
  if (expensesItems.length === 3) {
    buttonAddExpenses.style.display = "none";
  }
  placeholderTitle = document.querySelectorAll('[placeholder="Наименование"]');
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
};

AppData.prototype.addIncomeBlock = function () {
  let cloneIncomes = incomeItems[0].cloneNode(true);
  cloneIncomes.querySelector(".income-title").value = "";
  cloneIncomes.querySelector(".income-amount").value = "";
  incomeItems[0].parentNode.insertBefore(cloneIncomes, buttonAddIncome);
  incomeItems = document.querySelectorAll(".income-items");
  if (incomeItems.length === 3) {
    buttonAddIncome.style.display = "none";
  }
  placeholderTitle = document.querySelectorAll('[placeholder="Наименование"]');
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
};

AppData.prototype.getExpenses = function () {
  expensesItems.forEach((item) => {
    let itemExpenses = item.querySelector(".expenses-title").value;
    let cashExpenses = item.querySelector(".expenses-amount").value;
    if (itemExpenses !== "" && cashExpenses !== "") {
      this.expenses[itemExpenses] = +cashExpenses;
    }
  });
};

AppData.prototype.getIncome = function () {
  incomeItems.forEach((item) => {
    let itemIncome = item.querySelector(".income-title").value;
    let cashIncome = item.querySelector(".income-amount").value;
    if (itemIncome !== "" && cashIncome !== "") {
      this.income[itemIncome] = +cashIncome;
    }
  });
  for (let key in this.income) {
    this.incomeMonth += +this.income[key];
  }
};

AppData.prototype.getAddExpenses = function () {
  const _this = this;
  let addExpenses = additionalExpensesItem.value.split(",");
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== "") {
      _this.addExpenses.push(item);
    }
  });
};

AppData.prototype.reset = function () {
  this.deposit = false;
  this.percentDeposit = 0;
  this.moneyDeposit = 0;
  this.income = {};
  this.incomeMonth = 0;
  this.addIncome = [];
  this.expenses = {};
  this.expensesMonth = 0;
  this.addExpenses = [];
  this.budget = 0;
  this.budgetDay = 0;
  this.budgetMonth = 0;

  document.querySelectorAll(".data input[type=text]").forEach((item) => {
    item.disabled = false;
    item.value = "";
  });
  document.querySelectorAll(".result input[type=text]").forEach((item) => {
    item.value = "";
  });
  for (let i = 1; i < incomeItems.length; i++) {
    incomeItems[i].parentNode.removeChild(incomeItems[i]);
    buttonAddIncome.style.display = "block";
  }
  for (let i = 1; i < expensesItems.length; i++) {
    expensesItems[i].parentNode.removeChild(expensesItems[i]);
    buttonAddExpenses.style.display = "block";
  }
  peroidSelect.value = "1";
  periodAmountValue.innerHTML = peroidSelect.value;
  buttonCalculate.style.display = "block";
  buttonCancel.style.display = "none";
  buttonCalculate.disabled = true;
  buttonAddIncome.removeAttribute("disabled", "disabled");
  buttonAddExpenses.removeAttribute("disabled", "disabled");
  depositCheck.checked = false;
};
AppData.prototype.getAddIncome = function () {
  const _this=this;
  additionalIncomeItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== "") {
      _this.addIncome.push(itemValue);
    }
  });
};
AppData.prototype.showResult = function () {
  const _this = this;
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  additionalExpensesValue.value = this.addExpenses.join(", ");
  additionalIncomeValue.value = this.addIncome.join(", ");
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcSavedMoney();
  peroidSelect.addEventListener("input", () => {
    _this.updateRangeValue();
    incomePeriodValue.value = _this.calcSavedMoney();
  });
};

AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth += this.expenses[key];
  }
};
AppData.prototype.getBudget = function () {
  this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  this.budgetDay = Math.floor(this.budgetMonth / 30);
};
AppData.prototype.getTargetMonth = function () {
  return Math.ceil(targetAmount.value / this.budgetMonth);
};

AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay >= 1200) {
    return "У вас высокий уровень дохода";
  } else if (this.budgetDay >= 600) {
    return "У вас средний уровень дохода";
  } else if (this.budgetDay >= 0) {
    return "К сожалению у вас уровень дохода ниже среднего";
  } else {
    return "Что то пошло не так";
  }
};
AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    let percent;
    let liveSaving;
    do {
      percent = prompt("Какой годовой процент?");
    } while (!isNumber(percent));
    this.percentDeposit = +percent;
    do {
      liveSaving = prompt("Какая сумма заложена?");
    } while (!isNumber(liveSaving));
    this.moneyDeposit = +liveSaving;
  }
};
AppData.prototype.updateRangeValue = function () {
  periodAmountValue.textContent = peroidSelect.value;
};
AppData.prototype.calcSavedMoney = function () {
  return this.budgetMonth * peroidSelect.value;
};

AppData.prototype.eventListener = function () {
  buttonCalculate.disabled = true;

  salaryAmount.addEventListener("input", function () {
    if (salaryAmount.value.trim() !== "" && isNumber(salaryAmount.value)) {
      buttonCalculate.disabled = false;
    } else {
      buttonCalculate.disabled = true;
    }
  });

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
  buttonCalculate.addEventListener("click", this.start.bind(this));
  buttonCancel.addEventListener("click", this.reset.bind(this));
  
  buttonAddExpenses.addEventListener(
    "click",
    this.addExpensesBlock.bind(this)
  );
  buttonAddIncome.addEventListener("click", this.addIncomeBlock.bind(this));
  peroidSelect.addEventListener("input", this.updateRangeValue.bind(this));
};

const appData = new AppData();
appData.eventListener();
console.log(appData);
// buttonCancel.addEventListener("click", appData.reset.bind(appData));
// buttonCalculate.addEventListener("click", appData.start.bind(appData));
// buttonAddExpenses.addEventListener("click", appData.addExpensesBlock);
// buttonAddIncome.addEventListener("click", appData.addIncomeBlock);
// peroidSelect.addEventListener("input", appData.updateRangeValue);
