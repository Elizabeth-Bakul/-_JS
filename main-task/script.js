let money = 35850;
let income = 'фриланс';
let addExpenses = 'интернет, ТРанспорт, свет, коммунальные УСлуги';
let deposit = true;
let mission = 150000;
let period = 11;


console.log('Тип данных "money":', typeof money);
console.log('Тип данных "income":', typeof income);
console.log('Тип данных "deposit":', typeof deposit);
console.log(`Длина строки "addExpenses" ${addExpenses.length}`);
console.log('Период равен ' + period + ' месяцев');

console.log('Цель заработать ' + mission+ ' рублей/долларов/гривен/юани');
let array = addExpenses.toLowerCase().split(", ");
console.log(array);
let budgetDay = money / 30;
console.log("Бюджет в день:", budgetDay);