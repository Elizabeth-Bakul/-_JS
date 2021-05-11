import countTimer from "./modules/countTimer";
import toggleMenu from "./modules/toggleMenu";
import togglePopUp from "./modules/togglePopUp";
import toggleTabs from "./modules/toggleTabs";
import toggleSlider from "./modules/toggleSlider";
import handlerPhotoMouseEnter from "./modules/handlerPhotoMouseEnter";
import calc from "./modules/calc";
import sendForm from "./modules/sendForm";

countTimer("28 april 2021");

toggleMenu();

togglePopUp();

toggleTabs();

toggleSlider();

handlerPhotoMouseEnter();

calc(100);
// Отправка данных формы на сервер

sendForm("form1"); // главная форма в header
sendForm("form2"); // форма в footer
sendForm("form3");