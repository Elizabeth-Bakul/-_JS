window.addEventListener("DOMContentLoaded", () => {
  "use strict";

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
      if(id!=="#close"){
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
});
