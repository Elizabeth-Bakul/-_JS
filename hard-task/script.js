"use strict";

let lang = prompt("Введите язык (ru/en): ");

let dayRus = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
  "Воскресенье",
];

let dayEng = [
  "Monday",
  "Tuesday",
  "Wendensday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];


if (lang === 'ru') {
  console.log(dayRus);
} else if (lang === 'en') {
  console.log(dayEng);
} else {
  console.log('Неправильный язык');
}

switch (lang) {
  case "ru":
    console.log(dayRus);
    break;
  case "en":
    console.log(dayEng);
    break;
  default:
    console.log('Неправильный язык');
}

let day = {
  'ru':  dayRus,
  'en': dayEng
};
console.log(day[lang]);


//task 2
let namePerson = prompt("Имя участника курса: ");
let profession;
namePerson === 'Артём' ?  profession = 'Директор' :  namePerson === 'Максим' ? profession = 'Преподаватель' : profession = 'Студент';
console.log(profession);