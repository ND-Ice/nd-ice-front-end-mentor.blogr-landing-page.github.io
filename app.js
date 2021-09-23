const navToggler = document.querySelector(".nav__toggler");
const navMenu = document.querySelector(".link__container");
const collapsibleToggler = document.querySelector(".connect");
const collapsibleContent = document.querySelector(".collapsible--connect");

navToggler.addEventListener("click", () => {
  navMenu.classList.toggle("link__container--active");
  navToggler.classList.toggle("nav__toggler--active");
});

collapsibleToggler.addEventListener("click", () => {
  collapsibleContent.classList.toggle("collapsible--expanded");
});
