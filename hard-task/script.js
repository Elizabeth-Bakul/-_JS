"use strict";

function DomElement(selector, height, width, bg, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.position=position;
}
DomElement.prototype.newElement = function () {
  let elem;
  if (this.selector[0] === ".") {
    elem = document.createElement("div");
    elem.className = this.selector.slice(1);
  }
  if (this.selector[0] === "#") {
    elem = document.createElement("p");
    elem.id = this.selector.slice(1);
  }
  elem.style.cssText = `height: ${this.height}px;
  width: ${this.width}px;
  background: ${this.bg};
  position: ${this.position};

  `;
  console.log(elem);
  return elem;
};



document.addEventListener('DOMContentLoaded', ()=>{
let newDiv = new DomElement(".block", 100, 100, "yellow", "absolute");
document.body.appendChild(newDiv.newElement());


document.addEventListener('keydown', (event)=>{
  let element = document.querySelector(".block");
  let box = element.getBoundingClientRect();
  let left=box.left;
  let top=box.top;
  if (event.keyCode === 37) {
    left=left-10;
    left=left+'px';
    element.style.left = left;
  }
  if (event.keyCode === 38) {
    top = top - 10;
    top = top + "px";
    element.style.top = top;
  }
  if (event.keyCode === 39) {
    left = left + 10;
    left = left + "px";
    element.style.left = left;
  }
  if (event.keyCode === 40) {
    top = top + 10;
    top = top + "px";
    element.style.top = top;
  }
});



});




