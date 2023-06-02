const menuBtn = document.querySelector("#menu-btn")
const menu = document.querySelector(".menu")
const body = document.querySelector("body")

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active")
  body.classList.toggle("no-scroll")
})