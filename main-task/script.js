let money = +prompt('Ваш месячный доход?');
let income = 'фриланс';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 150000;
let period = 11;
let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = +prompt('Во сколько это обойдется?'); 
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = +prompt('Во сколько это обойдется?'); 

console.log('Тип данных "money":', typeof money);
console.log('Тип данных "income":', typeof income);
console.log('Тип данных "deposit":', typeof deposit);
console.log(`Длина строки "addExpenses" ${addExpenses.length}`);
let array = addExpenses.toLowerCase().split(", ");
console.log(array);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission+ ' рублей/долларов/гривен/юани');

let budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц: ' + budgetMonth);

let budgetDay = Math.floor(budgetMonth / 30);
console.log("Бюджет в день: ", budgetDay);

let plannedPeriod = Math. ceil(mission / budgetMonth);
console.log('Планируемый период: ' + plannedPeriod);

if(budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if (budgetDay >= 600){
  console.log('У вас средний уровень дохода');
} else if (budgetDay >= 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
};