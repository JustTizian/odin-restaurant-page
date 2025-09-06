import "./styles.css"
import home from "./home.js"
import menu from "./menu.js"
import about from "./about.js"

const contentContainer = document.querySelector('#content')

console.log("Hello World")
home()
menu()
about()

const homeButton = document.querySelector('#home-btn')
const menuButton = document.querySelector('#menu-btn')
const aboutButton = document.querySelector('#about-btn')

homeButton.addEventListener("click", () => {contentContainer.replaceChildren(); home()})
menuButton.addEventListener("click", () => {contentContainer.replaceChildren(); menu()})
aboutButton.addEventListener("click", () => {contentContainer.replaceChildren(); about()})
