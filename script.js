const botaoAbrir = document.querySelector(".header-mobile > button")
const botaofechar = document.querySelector(".header-mobile mav button")


const body = document.querySelector("body")
const nav = document.querySelector(".header-mobile nav")

console.log

botaoAbrir.addEventListener("click",abrirmenu)
botaofechar.addEventListener("click, fecharmenu")


function abrirMenu () {
       body.classList.add("escurecer")
       nav.classList.add("abrir")
}

function fecharMenu () {
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")
}