"use strict";
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' , 'Воскресенье'];
let days = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
let date = new Date();
let day = date.getDay();
let dayWeek = days[day];



for (let item of week) {
  let html = item;
  if ((item === 'Суббота') || (item === 'Воскресенье')){
  html = html.italics();
  }
  if (item === dayWeek){
    html = html.bold();
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div);

}


