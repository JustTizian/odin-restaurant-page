import spag from "./spaghetti.jpg"
const contentContainer = document.querySelector('#content')

export default function () {
    const container = document.createElement("div")
    const title = document.createElement("h1")
    title.textContent = "About"

    const image = document.createElement("img")
    image.src = spag

    const paragraph = document.createElement("p")
    paragraph.textContent = "Here you find all the important information about my restaurant"

    container.appendChild(title)
    container.appendChild(image)
    container.appendChild(paragraph)

    contentContainer.appendChild(container)
}