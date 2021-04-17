"use strict";
let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];
const div = document.createElement("div");
div.style.color="red";
const div2 = document.createElement("div");
div2.style.color = "red";

function bendTheWord(n, textForms) {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForms[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForms[1];
  }
  if (n1 === 1) {
    return textForms[0];
  }
  return textForms[2];
}

function addZero(n){
  if (n>=0 && n<10) {
    return '0'+n;
  } else {
    return n;
  }
}

function getData() {
  let date = new Date();
  let dayWeek = days[date.getDay()];
  let day = date.getDate();
  let numberMonth = date.getMonth() + 1;
  let month = months[numberMonth - 1];
  let year = date.getFullYear();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let html1 =
    "Сегодня" +
    " " +
    dayWeek +
    ", " +
    day +
    " " +
    month +
    " " +
    year +
    " " +
    "года" +
    ", " +
    hour +
    " " +
    bendTheWord(hour, ["час", "часа", "часов"]) +
    " " +
    minutes +
    " " +
    bendTheWord(minutes, ["минута", "минуты", "минут"]) +
    " " +
    seconds +
    " " +
    bendTheWord(seconds, ["секунда", "секунды", "секунд"]);
  
  div.innerHTML = html1;
  
  let html2 =
    addZero(day) +
    "." +
    addZero(numberMonth) +
    "." +
    year +
    " - " +
    addZero(hour) +
    ":" +
    addZero(minutes) +
    ":" +
    addZero(seconds);
  div2.innerHTML = html2;
}

document.body.appendChild(div);
document.body.appendChild(div2);
setInterval(()=> {
  getData();
}, 1000);
