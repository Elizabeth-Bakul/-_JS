const books = document.querySelector(".books"),
  bookElements = document.querySelectorAll(".book");
books.prepend(bookElements[1]);
books.append(bookElements[2]);
console.log(bookElements);
bookElements[4].after(bookElements[3]);

const body = document.querySelector("body");
body.style.backgroundImage = 'URL("image/you-dont-know-js.jpg")';
let title = bookElements[4].querySelector('a');
title.textContent = "Книга 3. this и Прототипы Объектов";

let advertising = document.querySelector(".adv");
advertising.remove();

const book1= document.querySelectorAll("ul")[1];

let chapter1 = book1.querySelectorAll("li");
chapter1[7].after(chapter1[9]);
chapter1[9].after(chapter1[2]);
chapter1[3].after(chapter1[6]);
chapter1[6].after(chapter1[8]);

const book2 = document.querySelectorAll("ul")[4];
let chapter2 = book2.querySelectorAll("li");

chapter2[4].after(chapter2[2]);
chapter2[1].after(chapter2[9]);
chapter2[7].after(chapter2[5]);

const newElem = document.createElement("li");
const book3 = document.querySelectorAll("ul")[5];
newElem.textContent = "Глава 8: За пределами ES6";
book3.append(newElem);
let chapter3 = book3.querySelectorAll("li");
chapter3[8].after(chapter3[10]);