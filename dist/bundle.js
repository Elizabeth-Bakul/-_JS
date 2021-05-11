/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_toggleTabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleTabs */ \"./src/modules/toggleTabs.js\");\n/* harmony import */ var _modules_toggleSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/toggleSlider */ \"./src/modules/toggleSlider.js\");\n/* harmony import */ var _modules_handlerPhotoMouseEnter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/handlerPhotoMouseEnter */ \"./src/modules/handlerPhotoMouseEnter.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForm */ \"./src/modules/sendForm.js\");\n\n\n\n\n\n\n\n\n(0,_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__.default)(\"28 april 2021\");\n(0,_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__.default)();\n(0,_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__.default)();\n(0,_modules_toggleTabs__WEBPACK_IMPORTED_MODULE_3__.default)();\n(0,_modules_toggleSlider__WEBPACK_IMPORTED_MODULE_4__.default)();\n(0,_modules_handlerPhotoMouseEnter__WEBPACK_IMPORTED_MODULE_5__.default)();\n(0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__.default)(100); // Отправка данных формы на сервер\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)(\"form1\"); // главная форма в header\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)(\"form2\"); // форма в footer\n\n(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_7__.default)(\"form3\");\n\n//# sourceURL=webpack://lesson-1/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar calc = function calc() {\n  var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;\n  var calcBlock = document.querySelector(\".calc-block\"),\n      calcType = document.querySelector(\".calc-type\"),\n      calcSquare = document.querySelector(\".calc-square\"),\n      calcDay = document.querySelector(\".calc-day\"),\n      calcCount = document.querySelector(\".calc-count\"),\n      totalValue = document.getElementById(\"total\");\n\n  var validateCalculatorValues = function validateCalculatorValues() {\n    var calcContainer = document.querySelector(\".calc\");\n    calcContainer.addEventListener(\"input\", function (e) {\n      if (e.target.matches(\"input\")) {\n        e.target.value = e.target.value.replace(/[^\\d]/g, \"\");\n      }\n    });\n  };\n\n  validateCalculatorValues();\n\n  var countSum = function countSum() {\n    var total = 0,\n        countValue = 1,\n        dayValue = 1;\n    var typeValue = calcType.options[calcType.selectedIndex].value,\n        squareValue = +calcSquare.value;\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n\n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    }\n\n    totalValue.textContent = total;\n\n    function animate(_ref) {\n      var timing = _ref.timing,\n          draw = _ref.draw,\n          duration = _ref.duration;\n      var start = performance.now();\n      requestAnimationFrame(function animate(time) {\n        var timeFraction = (time - start) / duration;\n\n        if (timeFraction > 1) {\n          timeFraction = 1;\n        }\n\n        var progress = timing(timeFraction);\n        draw(progress);\n\n        if (timeFraction < 1) {\n          requestAnimationFrame(animate);\n        }\n      });\n    }\n\n    var animation = function animation() {\n      animate({\n        duration: 1000,\n        timing: function timing(timeFraction) {\n          return timeFraction;\n        },\n        draw: function draw(progress) {\n          totalValue.textContent = Math.floor(progress * total);\n        }\n      });\n    };\n\n    animation();\n  };\n\n  calcBlock.addEventListener(\"change\", function (event) {\n    var target = event.target;\n\n    if (target === calcType || target === calcSquare || target === calcDay || target === calcCount) {\n      countSum();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);\n\n//# sourceURL=webpack://lesson-1/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction countTimer(deadline) {\n  var timerHours = document.querySelector(\"#timer-hours\"),\n      timerMinutes = document.querySelector(\"#timer-minutes\"),\n      timerSeconds = document.querySelector(\"#timer-seconds\");\n  var idInterval;\n\n  function getTimeRemaining() {\n    var deadlineDate = new Date(deadline).getTime(),\n        currentDate = new Date().getTime(),\n        timeRemaining = (deadlineDate - currentDate) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 3600);\n    return {\n      timeRemaining: timeRemaining,\n      hours: hours,\n      minutes: minutes,\n      seconds: seconds\n    };\n  }\n\n  function updateClock() {\n    var timer = getTimeRemaining();\n\n    if (timer.timeRemaining <= 0) {\n      timerHours.textContent = \"00\";\n      timerMinutes.textContent = \"00\";\n      timerSeconds.textContent = \"00\";\n      clearInterval(idInterval);\n    } else {\n      timerHours.textContent = timer.hours < 10 ? \"0\" + timer.hours : timer.hours;\n      timerMinutes.textContent = timer.minutes < 10 ? \"0\" + timer.minutes : timer.minutes;\n      timerSeconds.textContent = timer.seconds < 10 ? \"0\" + timer.seconds : timer.seconds;\n    }\n  }\n\n  idInterval = setInterval(updateClock, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countTimer);\n\n//# sourceURL=webpack://lesson-1/./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/handlerPhotoMouseEnter.js":
/*!***********************************************!*\
  !*** ./src/modules/handlerPhotoMouseEnter.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar handlerPhotoMouseEnter = function handlerPhotoMouseEnter() {\n  var images = document.querySelectorAll(\".command img\");\n  images.forEach(function (img) {\n    var imageSrc = img.src;\n    img.addEventListener(\"mouseenter\", function () {\n      img.src = img.dataset.img;\n    });\n    img.addEventListener(\"mouseleave\", function () {\n      img.src = imageSrc;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handlerPhotoMouseEnter);\n\n//# sourceURL=webpack://lesson-1/./src/modules/handlerPhotoMouseEnter.js?");

/***/ }),

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sendForm = function sendForm(formIdString) {\n  var errorMessage = \"Что-то пошло не так...\",\n      loadMessage = \"Загрузка...\",\n      successMessage = \"Спасибо! Мы скоро с вами свяжемся!\";\n  var form = document.getElementById(formIdString),\n      // форма для заполнения заявки\n  statusMessageElement = document.createElement(\"div\"),\n      // сообщение о статусе отправки заявки\n  inputs = document.querySelectorAll(\"#\".concat(formIdString, \" input\")); // все inputs из формы\n\n  statusMessageElement.style.cssText = \"font-size: 2rem; color: white\"; // Функция отправки данных формы на сервер\n\n  var postData = function postData(requestBody) {\n    return new Promise(function (resolve, reject) {\n      var request = new XMLHttpRequest();\n      request.addEventListener(\"readystatechange\", function () {\n        if (request.readyState !== 4) {\n          return;\n        }\n\n        if (request.status === 200) {\n          resolve();\n        } else {\n          reject(request.statusText);\n        }\n      });\n      request.open(\"POST\", \"server.php\");\n      request.setRequestHeader(\"Content-Type\", \"application/json\");\n      request.send(JSON.stringify(requestBody));\n    });\n  }; // Валидация данных при вводе телефона\n\n\n  form.addEventListener(\"input\", function (e) {\n    if (e.target.matches('input[name=\"user_phone\"]')) {\n      e.target.setAttribute(\"pattern\", \"^[0-9-+s()]{11,18}$\");\n      e.target.value = e.target.value.replace(/[^\\d\\+]/g, \"\");\n    }\n  }); // Валидация данных при вводе email\n\n  form.addEventListener(\"input\", function (e) {\n    if (e.target.matches('input[name=\"user_email\"]')) {\n      e.target.setAttribute(\"pattern\", \"^[A-Za-z0-9.-_]+@[A-Za-z]+.[A-Za-z]{2,3}$\");\n      e.target.value = e.target.value.replace(/[^A-Za-z\\d\\.\\-@_]/g, \"\");\n    }\n  }); // Валидация данных при вводе имени\n\n  form.addEventListener(\"input\", function (e) {\n    if (e.target.matches('input[name=\"user_name\"]')) {\n      e.target.setAttribute(\"pattern\", \"[А-Яа-яЁё ]{2,}\");\n      e.target.value = e.target.value.replace(/[^А-Яа-яЁё\\s]|/g, \"\");\n    }\n  }); // Валидация данных при вводе сообщения\n\n  form.addEventListener(\"input\", function (e) {\n    if (e.target.matches('input[name=\"user_message\"]')) {\n      e.target.value = e.target.value.replace(/[^А-Яа-яЁё\\d\\s,\\.\\?\\(\\)\\*\\+\\$-:;!'\"@&%#№]/g, \"\");\n    }\n  }); // Слушатель формы\n\n  form.addEventListener(\"submit\", function (e) {\n    e.preventDefault();\n    form.append(statusMessageElement);\n    statusMessageElement.textContent = loadMessage;\n    var formData = new FormData(form);\n    var body = {}; // берем данные формы и заполняем тело запроса body\n\n    formData.forEach(function (item, index) {\n      return body[index] = item;\n    }); // у объекта formData есть свой метод forEach()\n    // отправка данных и уведомление пользователя\n\n    postData(body).then(function () {\n      return statusMessageElement.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      statusMessageElement.textContent = errorMessage;\n      console.log(error);\n    });\n    inputs.forEach(function (item) {\n      return item.value = \"\";\n    }); // очистка input после отправки данных\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://lesson-1/./src/modules/sendForm.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar toggleMenu = function toggleMenu() {\n  var menu = document.querySelector(\"menu\");\n\n  var handlerMenu = function handlerMenu() {\n    menu.classList.toggle(\"active-menu\");\n  };\n\n  document.addEventListener(\"click\", function (e) {\n    var target = e.target;\n\n    if (target.closest(\".menu\") || target.classList.contains(\"close-btn\") || target.matches(\"ul>li>a\")) {\n      handlerMenu();\n    } else if (!target.closest(\".active-menu\")) {\n      menu.classList.remove(\"active-menu\");\n    }\n  });\n};\n\nvar scrollLinks = document.querySelectorAll(\"a\");\n\nvar _iterator = _createForOfIteratorHelper(scrollLinks),\n    _step;\n\ntry {\n  var _loop = function _loop() {\n    var scrollLink = _step.value;\n    scrollLink.addEventListener(\"click\", function (event) {\n      event.preventDefault();\n      var id = scrollLink.getAttribute(\"href\");\n\n      if (id !== \"#close\") {\n        document.querySelector(id).scrollIntoView({\n          behavior: \"smooth\",\n          block: \"start\"\n        });\n      }\n    });\n  };\n\n  for (_iterator.s(); !(_step = _iterator.n()).done;) {\n    _loop();\n  }\n} catch (err) {\n  _iterator.e(err);\n} finally {\n  _iterator.f();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleMenu);\n\n//# sourceURL=webpack://lesson-1/./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopUp = function togglePopUp() {\n  var popupButtons = document.querySelectorAll(\".popup-btn\"),\n      popup = document.querySelector(\".popup\"),\n      closePopUpButton = document.querySelector(\".popup-close\"),\n      popUpContent = document.querySelector(\".popup-content\");\n  var idInterval,\n      count = 0; // animate popup\n\n  var animatePopUp = function animatePopUp() {\n    count++;\n\n    if (parseFloat(popUpContent.style.left) < 38) {\n      popUpContent.style.left = count + \"%\";\n    } else {\n      clearInterval(idInterval);\n      count = 0;\n    }\n  };\n\n  popupButtons.forEach(function (item) {\n    item.addEventListener(\"click\", function () {\n      popup.style.display = \"block\";\n      popUpContent.style.left = \"-50%\";\n\n      if (window.innerWidth > 768) {\n        idInterval = setInterval(animatePopUp, 10);\n      } else {\n        popUpContent.style.left = \"38%\";\n      }\n    });\n  });\n  popup.addEventListener(\"click\", function (e) {\n    var target = e.target; // если нажимаем кнопку \"Закрыть\" или нажимаем вне области окна, то закрываем его\n\n    if (target.classList.contains(\"popup-close\") || !target.closest(\".popup-content\")) {\n      popup.style.display = \"none\";\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopUp);\n\n//# sourceURL=webpack://lesson-1/./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/toggleSlider.js":
/*!*************************************!*\
  !*** ./src/modules/toggleSlider.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleSlider = function toggleSlider() {\n  var slides = document.querySelectorAll(\".portfolio-item\"),\n      slider = document.querySelector(\".portfolio-content\"),\n      dotsContainer = document.querySelector(\".portfolio-dots\");\n  var dots = document.querySelectorAll(\".dot\"),\n      currentSlide = 0,\n      idInterval; // добавляем пагинацию\n\n  slides.forEach(function (item, index) {\n    var li = document.createElement(\"li\");\n\n    if (index === 0) {\n      li.classList.add(\"dot\");\n      li.classList.add(\"dot-active\");\n    } else {\n      li.classList.add(\"dot\");\n    }\n\n    dotsContainer.append(li);\n  });\n  dots = document.querySelectorAll(\".dot\"); // удаляем активный класс у текущего элемента слайдера\n\n  var prevSlide = function prevSlide(element, index, strClass) {\n    element[index].classList.remove(strClass);\n  }; // добавляем активный класс следующему элементу слайдера\n\n\n  var nextSlide = function nextSlide(element, index, strClass) {\n    element[index].classList.add(strClass);\n  }; // автоматическое переключение слайдов\n\n\n  var autoPlaySlider = function autoPlaySlider() {\n    prevSlide(slides, currentSlide, \"portfolio-item-active\"); // скрываем текущий слайд\n\n    prevSlide(dots, currentSlide, \"dot-active\"); // удаляем активный стиль пагинации текущего слайда\n\n    currentSlide++;\n\n    if (currentSlide === slides.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slides, currentSlide, \"portfolio-item-active\"); // делаем видимым следующий слайд\n\n    nextSlide(dots, currentSlide, \"dot-active\"); // добавялем активный стиль пагинации следующего слайда\n  }; // запуск слайдшоу\n\n\n  var startAutoPlay = function startAutoPlay() {\n    idInterval = setInterval(autoPlaySlider, 2000);\n  };\n\n  startAutoPlay(); // останов слайдшоу\n\n  var stopAutoPlay = function stopAutoPlay() {\n    clearInterval(idInterval);\n  }; // останов слайдшоу при наведении на кнопку или пагинацию\n\n\n  slider.addEventListener(\"mouseover\", function (e) {\n    if (e.target.matches(\".portfolio-btn\") || e.target.matches(\".dot\")) {\n      stopAutoPlay();\n    }\n  }); // запуск слайдшоу в иных случаях\n\n  slider.addEventListener(\"mouseout\", function (e) {\n    if (e.target.matches(\".portfolio-btn\") || e.target.matches(\".dot\")) {\n      startAutoPlay();\n    }\n  }); // переключение слайдов по клику на кнопку или пагинацию\n\n  slider.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    var target = e.target; // условие для предовращения влияния клика по слайду на верстку\n\n    if (!target.matches(\".dot\") && !target.matches(\".portfolio-btn\")) {\n      return;\n    } // удаляем стили у текущего слайда и пагинации\n\n\n    prevSlide(slides, currentSlide, \"portfolio-item-active\");\n    prevSlide(dots, currentSlide, \"dot-active\"); // обработка клика по кнопке или пагинации\n\n    if (target.matches(\".dot\")) {\n      dots.forEach(function (dot, index) {\n        if (dot === target) {\n          currentSlide = index;\n        }\n      });\n    } else if (target.matches(\"#arrow-right\")) {\n      currentSlide++;\n    } else if (target.matches(\"#arrow-left\")) {\n      currentSlide--;\n    } // условие для бесконечного листания слайдов\n\n\n    if (currentSlide >= slides.length) {\n      currentSlide = 0;\n    } else if (currentSlide < 0) {\n      currentSlide = slides.length - 1;\n    } // добавляем стили следующему слайду и пагинации\n\n\n    nextSlide(slides, currentSlide, \"portfolio-item-active\");\n    nextSlide(dots, currentSlide, \"dot-active\");\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleSlider);\n\n//# sourceURL=webpack://lesson-1/./src/modules/toggleSlider.js?");

/***/ }),

/***/ "./src/modules/toggleTabs.js":
/*!***********************************!*\
  !*** ./src/modules/toggleTabs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleTabs = function toggleTabs() {\n  var tabsHeader = document.querySelector(\".service-header\"),\n      tabs = document.querySelectorAll(\".service-header-tab\"),\n      tabsContent = document.querySelectorAll(\".service-tab\");\n\n  var toggleTabContent = function toggleTabContent(index) {\n    tabsContent.forEach(function (item, i) {\n      if (i === index) {\n        tabs[i].classList.add(\"active\");\n        item.classList.remove(\"d-none\");\n      } else {\n        tabs[i].classList.remove(\"active\");\n        item.classList.add(\"d-none\");\n      }\n    });\n  };\n\n  tabsHeader.addEventListener(\"click\", function (e) {\n    var target = e.target;\n    target = target.closest(\".service-header-tab\"); // если нет класса, поднимается выше по DOM-дереву к родителю\n\n    if (target) {\n      tabs.forEach(function (item, i) {\n        if (item === target) {\n          toggleTabContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleTabs);\n\n//# sourceURL=webpack://lesson-1/./src/modules/toggleTabs.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;