"use strict";
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота' , 'Воскресенье'];
let date = new Date();
let day = date.getDay();
if (day === 0) {
  day=6;
} else { day--;}
for (let i = 0, len = week.length; i < len; i++) {
  let html = week[i];
  if (i === day) {
    html = html.bold();
  }
  if (i>4) {
    html = html.italics();
  }
  const div = document.createElement("div");
  div.innerHTML = html;
  document.body.appendChild(div);
}


