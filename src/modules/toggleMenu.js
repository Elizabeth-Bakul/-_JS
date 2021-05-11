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
const menu = document.querySelector("menu");
const scrollLinks = menu.querySelectorAll("a");
const main = document.querySelector("main");
const scrollLink2 = main.querySelector("a");

scrollLink2.addEventListener("click", (event) => {
    event.preventDefault();
    const id = scrollLink2.getAttribute("href");
      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    })
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
export default toggleMenu;