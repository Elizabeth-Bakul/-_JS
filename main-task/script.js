window.addEventListener("DOMContentLoaded", () => {
  ("use strict");

  function countTimer(deadline) {
    const timerHours = document.querySelector("#timer-hours"),
      timerMinutes = document.querySelector("#timer-minutes"),
      timerSeconds = document.querySelector("#timer-seconds");

    let idInterval;

    function getTimeRemaining() {
      const deadlineDate = new Date(deadline).getTime(),
        currentDate = new Date().getTime(),
        timeRemaining = (deadlineDate - currentDate) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 3600);
      return { timeRemaining, hours, minutes, seconds };
    }

    function updateClock() {
      const timer = getTimeRemaining();

      if (timer.timeRemaining <= 0) {
        timerHours.textContent = "00";
        timerMinutes.textContent = "00";
        timerSeconds.textContent = "00";
        clearInterval(idInterval);
      } else {
        timerHours.textContent =
          timer.hours < 10 ? "0" + timer.hours : timer.hours;
        timerMinutes.textContent =
          timer.minutes < 10 ? "0" + timer.minutes : timer.minutes;
        timerSeconds.textContent =
          timer.seconds < 10 ? "0" + timer.seconds : timer.seconds;
      }
    }

    idInterval = setInterval(updateClock, 1000);
  }

  countTimer("28 april 2021");

  const toggleMenu = () => {
    const menu = document.querySelector("menu");

    const handlerMenu = () => {
      menu.classList.toggle("active-menu");
    };

    document.addEventListener("click", (e) => {
      let target = e.target;
      if (
        target.closest(".menu") ||
        target.classList.contains("close-btn") ||
        target.matches("ul>li>a")
      ) {
        handlerMenu();
      } else if (!target.closest(".active-menu")) {
        menu.classList.remove("active-menu");
      }
    });
  };
  toggleMenu();
  const togglePopUp = () => {
    const popupButtons = document.querySelectorAll(".popup-btn"),
      popup = document.querySelector(".popup"),
      closePopUpButton = document.querySelector(".popup-close"),
      popUpContent = document.querySelector(".popup-content");

    let idInterval,
      count = 0;

    // animate popup
    const animatePopUp = () => {
      count++;
      if (parseFloat(popUpContent.style.left) < 38) {
        popUpContent.style.left = count + "%";
      } else {
        clearInterval(idInterval);
        count = 0;
      }
    };

    popupButtons.forEach((item) => {
      item.addEventListener("click", () => {
        popup.style.display = "block";
        popUpContent.style.left = "-50%";
        if (window.innerWidth > 768) {
          idInterval = setInterval(animatePopUp, 10);
        } else {
          popUpContent.style.left = "38%";
        }
      });
    });

    popup.addEventListener("click", (e) => {
      let target = e.target;
      // если нажимаем кнопку "Закрыть" или нажимаем вне области окна, то закрываем его
      if (
        target.classList.contains("popup-close") ||
        !target.closest(".popup-content")
      ) {
        popup.style.display = "none";
      }
    });
  };
  togglePopUp();

  const scrollLinks = document.querySelectorAll("a");

  for (const scrollLink of scrollLinks) {
    scrollLink.addEventListener("click", (event) => {
      event.preventDefault();
      const id = scrollLink.getAttribute("href");
      if (id !== "#close") {
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  }
  const toggleTabs = () => {
    const tabsHeader = document.querySelector(".service-header"),
      tabs = document.querySelectorAll(".service-header-tab"),
      tabsContent = document.querySelectorAll(".service-tab");

    const toggleTabContent = (index) => {
      tabsContent.forEach((item, i) => {
        if (i === index) {
          tabs[i].classList.add("active");
          item.classList.remove("d-none");
        } else {
          tabs[i].classList.remove("active");
          item.classList.add("d-none");
        }
      });
    };

    tabsHeader.addEventListener("click", (e) => {
      let target = e.target;
      target = target.closest(".service-header-tab"); // если нет класса, поднимается выше по DOM-дереву к родителю
      if (target) {
        tabs.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };
  toggleTabs();

  const toggleSlider = () => {
    const slides = document.querySelectorAll(".portfolio-item"),
      slider = document.querySelector(".portfolio-content"),
      dotsContainer = document.querySelector(".portfolio-dots");

    let dots = document.querySelectorAll(".dot"),
      currentSlide = 0,
      idInterval;

    // добавляем пагинацию
    slides.forEach((item, index) => {
      let li = document.createElement("li");
      if (index === 0) {
        li.classList.add("dot");
        li.classList.add("dot-active");
      } else {
        li.classList.add("dot");
      }
      dotsContainer.append(li);
    });

    dots = document.querySelectorAll(".dot");

    // удаляем активный класс у текущего элемента слайдера
    const prevSlide = (element, index, strClass) => {
      element[index].classList.remove(strClass);
    };

    // добавляем активный класс следующему элементу слайдера
    const nextSlide = (element, index, strClass) => {
      element[index].classList.add(strClass);
    };

    // автоматическое переключение слайдов
    const autoPlaySlider = () => {
      prevSlide(slides, currentSlide, "portfolio-item-active"); // скрываем текущий слайд
      prevSlide(dots, currentSlide, "dot-active"); // удаляем активный стиль пагинации текущего слайда

      currentSlide++;

      if (currentSlide === slides.length) {
        currentSlide = 0;
      }

      nextSlide(slides, currentSlide, "portfolio-item-active"); // делаем видимым следующий слайд
      nextSlide(dots, currentSlide, "dot-active"); // добавялем активный стиль пагинации следующего слайда
    };

    // запуск слайдшоу
    const startAutoPlay = () => {
      idInterval = setInterval(autoPlaySlider, 2000);
    };
    startAutoPlay();

    // останов слайдшоу
    const stopAutoPlay = () => {
      clearInterval(idInterval);
    };

    // останов слайдшоу при наведении на кнопку или пагинацию
    slider.addEventListener("mouseover", (e) => {
      if (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) {
        stopAutoPlay();
      }
    });

    // запуск слайдшоу в иных случаях
    slider.addEventListener("mouseout", (e) => {
      if (e.target.matches(".portfolio-btn") || e.target.matches(".dot")) {
        startAutoPlay();
      }
    });

    // переключение слайдов по клику на кнопку или пагинацию
    slider.addEventListener("click", (e) => {
      e.preventDefault();

      let target = e.target;

      // условие для предовращения влияния клика по слайду на верстку
      if (!target.matches(".dot") && !target.matches(".portfolio-btn")) {
        return;
      }

      // удаляем стили у текущего слайда и пагинации
      prevSlide(slides, currentSlide, "portfolio-item-active");
      prevSlide(dots, currentSlide, "dot-active");

      // обработка клика по кнопке или пагинации
      if (target.matches(".dot")) {
        dots.forEach((dot, index) => {
          if (dot === target) {
            currentSlide = index;
          }
        });
      } else if (target.matches("#arrow-right")) {
        currentSlide++;
      } else if (target.matches("#arrow-left")) {
        currentSlide--;
      }

      // условие для бесконечного листания слайдов
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      // добавляем стили следующему слайду и пагинации
      nextSlide(slides, currentSlide, "portfolio-item-active");
      nextSlide(dots, currentSlide, "dot-active");
    });
  };
  toggleSlider();

  const handlerPhotoMouseEnter = () => {
    const images = document.querySelectorAll(".command img");
    images.forEach((img) => {
      const imageSrc = img.src;
      img.addEventListener("mouseenter", () => {
        img.src = img.dataset.img;
      });
      img.addEventListener("mouseleave", () => {
        img.src = imageSrc;
      });
    });
  };
  handlerPhotoMouseEnter();

  // Валидация значений в калькуляторе
  const validateCalculatorValues = () => {
    const calcContainer = document.querySelector(".calc");
    calcContainer.addEventListener("input", (e) => {
      if (e.target.matches("input")) {
        e.target.value = e.target.value.replace(/[^\d]/g, "");
      }
    });
  };
  validateCalculatorValues();
  const checkInputs = () => {
    const form = document.getElementById("form1");
    form.addEventListener("input", (e) => {
      if (e.target.matches('input[name="user_phone"]')) {
        e.target.value = e.target.value.replace(/[^0-9()-]/g, "");
      }
      if (e.target.matches('input[name="user_email"]')) {
        e.target.value = e.target.value.replace(
          /[^a-z\!/\@/\~/\-/\_/\'/\*/]|/gi,
          ""
        );
        //e.target.value = e.target.value.replace(/[а-яё\s,?^]/gi, "");
      }
      if (e.target.matches('input[name="user_name"]')) {
        e.target.value = e.target.value.replace(/[^а-яё\s-]|/gi, "");
      }
    });
    const input = document.querySelectorAll("#form1 input");
    input.forEach((elem) => {
      elem.addEventListener(
        "blur",
        (event) => {
          // Заменяет 2 и более тире на один
          elem.value = elem.value.replace(/-{1,}/g, "-");
          // Заменяет 2 и более пробела на один
          elem.value = elem.value.replace(/\s{1,}/gi, " ");
          // Удаляет пробелы и тире в начале и конце строки
          elem.value = elem.value.replace(/^\s|\s$|^-|-$/g, "");
          // Приводит первую букву каждого слова в Верхний регистр в поле "Ваше имя"
          if (elem.name === "user_name") {
            let nameFirstLetter = [];
            let word = elem.value.split(" ");
            word.forEach((item) => {
              item = item.toLowerCase();
              item = item[0].toUpperCase() + item.slice(1);
              nameFirstLetter.push(item);
              elem.value = nameFirstLetter.join(" ");
            });
          }
        },
        true
      );
    });
    const form2 = document.getElementById("form2");
    form2.addEventListener("input", (e) => {
      if (e.target.matches('input[name="user_phone"]')) {
        e.target.value = e.target.value.replace(/[^\d)\s-]/g, "");
      }
      if (e.target.matches('input[name="user_email"]')) {
        e.target.value = e.target.value.replace(
          /[^a-z\!/\@/\~/\-/\_/\'/\*/]|/gi,
          ""
        );
      }
      if (e.target.matches('input[name="user_name"]')) {
        e.target.value = e.target.value.replace(/[^А-Яа-яЁё\s-]|/g, "");
      }
      if (e.target.matches('input[name="user_message"]')) {
        e.target.value = e.target.value.replace(/[^А-Яа-яЁё\s-]|/g, "");
      }
    });
    const topForms = document.querySelectorAll(".top-form");
    topForms.forEach((elem) => {
      elem.addEventListener(
        "blur",
        (event) => {
          // Заменяет 2 и более тире на один
          elem.value = elem.value.replace(/-{1,}/g, "-");
          // Заменяет 2 и более пробела на один
          elem.value = elem.value.replace(/\s{1,}/gi, " ");
          // Удаляет пробелы и тире в начале и конце строки
          elem.value = elem.value.replace(/^\s|\s$|^-|-$/g, "");
          // Приводит первую букву каждого слова в Верхний регистр в поле "Ваше имя"
          if (elem.name === "user_name") {
            let nameFirstLetter = [];
            let word = elem.value.split(" ");
            word.forEach((item) => {
              item = item.toLowerCase();
              item = item[0].toUpperCase() + item.slice(1);
              nameFirstLetter.push(item);
              elem.value = nameFirstLetter.join(" ");
            });
          }
        },
        true
      );
    });
    const form3 = document.getElementById("form3");
    form3.addEventListener("input", (e) => {
      if (e.target.matches('input[name="user_phone"]')) {
        e.target.value = e.target.value.replace(/[^0-9()-]/g, "");
      }
      if (e.target.matches('input[name="user_email"]')) {
        e.target.value = e.target.value.replace(
          /[^a-z\!/\@/\~/\-/\_/\'/\*/]|/gi,
          ""
        );
        //e.target.value = e.target.value.replace(/[а-яё\s,?^]/gi, "");
      }
      if (e.target.matches('input[name="user_name"]')) {
        e.target.value = e.target.value.replace(/[^а-яё\s-]|/gi, "");
      }
    });
    const input2 = document.querySelectorAll("#form3 input");
    input2.forEach((elem) => {
      elem.addEventListener(
        "blur",
        (event) => {
          // Заменяет 2 и более тире на один
          elem.value = elem.value.replace(/-{1,}/g, "-");
          // Заменяет 2 и более пробела на один
          elem.value = elem.value.replace(/\s{1,}/gi, " ");
          // Удаляет пробелы и тире в начале и конце строки
          elem.value = elem.value.replace(/^\s|\s$|^-|-$/g, "");
          // Приводит первую букву каждого слова в Верхний регистр в поле "Ваше имя"
          if (elem.name === "user_name") {
            let nameFirstLetter = [];
            let word = elem.value.split(" ");
            word.forEach((item) => {
              item = item.toLowerCase();
              item = item[0].toUpperCase() + item.slice(1);
              nameFirstLetter.push(item);
              elem.value = nameFirstLetter.join(" ");
            });
          }
        },
        true
      );
    });
  };
  
  //checkInputs();

  const calc = (price = 100) => {
    const calcBlock = document.querySelector(".calc-block"),
      calcType = document.querySelector(".calc-type"),
      calcSquare = document.querySelector(".calc-square"),
      calcDay = document.querySelector(".calc-day"),
      calcCount = document.querySelector(".calc-count"),
      totalValue = document.getElementById("total");

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      }

      totalValue.textContent = total;

      function animate({ timing, draw, duration }) {
        let start = performance.now();
        requestAnimationFrame(function animate(time) {
          let timeFraction = (time - start) / duration;
          if (timeFraction > 1) {
            timeFraction = 1;
          }
          let progress = timing(timeFraction);
          draw(progress);
          if (timeFraction < 1) {
            requestAnimationFrame(animate);
          }
        });
      }

      const animation = () => {
        animate({
          duration: 1000,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            totalValue.textContent = Math.floor(progress * total);
          },
        });
      };
      animation();
    };

    calcBlock.addEventListener("change", (event) => {
      const target = event.target;
      if (
        target === calcType ||
        target === calcSquare ||
        target === calcDay ||
        target === calcCount
      ) {
        countSum();
      }
    });
  };

  calc(100);
  // Отправка данных формы на сервер
    const sendForm = (formIdString) => {
      const errorMessage = "Что-то пошло не так...",
        loadMessage = "Загрузка...",
        successMessage = "Спасибо! Мы скоро с вами свяжемся!";

      const form = document.getElementById(formIdString), // форма для заполнения заявки
        statusMessageElement = document.createElement("div"), // сообщение о статусе отправки заявки
        inputs = document.querySelectorAll(`#${formIdString} input`); // все inputs из формы

      statusMessageElement.style.cssText = "font-size: 2rem; color: white";

      // Функция отправки данных формы на сервер
      const postData = (requestBody) => {
        return new Promise((resolve, reject) => {
          const request = new XMLHttpRequest();
          request.addEventListener("readystatechange", () => {
            if (request.readyState !== 4) {
              return;
            }
            if (request.status === 200) {
              resolve();
            } else {
              reject(request.statusText);
            }
          });
          request.open("POST", "server.php");
          request.setRequestHeader("Content-Type", "application/json");
          request.send(JSON.stringify(requestBody));
        });
      };

      // Валидация данных при вводе телефона
      form.addEventListener("input", (e) => {
        if (e.target.matches('input[name="user_phone"]')) {
          e.target.setAttribute("pattern", "^[0-9-+s()]{11,18}$");
          e.target.value = e.target.value.replace(/[^\d\+]/g, "");
        }
      });

      // Валидация данных при вводе email
      form.addEventListener("input", (e) => {
        if (e.target.matches('input[name="user_email"]')) {
          e.target.setAttribute(
            "pattern",
            "^[A-Za-z0-9.-_]+@[A-Za-z]+.[A-Za-z]{2,3}$"
          );
          e.target.value = e.target.value.replace(/[^A-Za-z\d\.\-@_]/g, "");
        }
      });

      // Валидация данных при вводе имени
      form.addEventListener("input", (e) => {
        if (e.target.matches('input[name="user_name"]')) {
          e.target.setAttribute("pattern", "[А-Яа-яЁё ]{2,}");
          e.target.value = e.target.value.replace(/[^А-Яа-яЁё\s]|/g, "");
        }
      });

      // Валидация данных при вводе сообщения
      form.addEventListener("input", (e) => {
        if (e.target.matches('input[name="user_message"]')) {
          e.target.value = e.target.value.replace(
            /[^А-Яа-яЁё\d\s,\.\?\(\)\*\+\$-:;!'"@&%#№]/g,
            ""
          );
        }
      });

      // Слушатель формы
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        form.append(statusMessageElement);

        statusMessageElement.textContent = loadMessage;

        const formData = new FormData(form);
        let body = {};

        // берем данные формы и заполняем тело запроса body
        formData.forEach((item, index) => (body[index] = item)); // у объекта formData есть свой метод forEach()

        // отправка данных и уведомление пользователя
        postData(body)
          .then(() => (statusMessageElement.textContent = successMessage))
          .catch((error) => {
            statusMessageElement.textContent = errorMessage;
            console.log(error);
          });

        inputs.forEach((item) => (item.value = "")); // очистка input после отправки данных
      });
    };
  sendForm("form1"); // главная форма в header
  sendForm("form2"); // форма в footer
  sendForm("form3"); // форма из модального окна
});
