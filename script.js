const botaoAbrir = document.querySelector(".header-mobile > button")
const botaoFechar = document.querySelector(".header-mobile nav button")
const botaoAbrir = document.querySelector("header > button")
const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")
const nav = document.querySelector("header .mobile")

botaoAbrir.addEventListener('click', abrirMenu)
botaoFechar.addEventListener('click', fecharMenu)
function abrirMenu() {
    body.classList.add("escurecer")
    nav.classList.add("Abrir")
}
function fecharMenu() {
    body.classList.remove("escurecer")
    nav.classList.remove("Abrir")
}