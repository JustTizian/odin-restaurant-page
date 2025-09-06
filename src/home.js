import spag from "./spaghetti-bolognese.jpg"
const contentContainer = document.querySelector('#content')

export default function(){
    const container = document.createElement("div")
    const title = document.createElement("h1")
    title.textContent = "This is my awesome Restaurant!"

    const image = document.createElement("img")
    image.src = spag

    const paragraph = document.createElement("p")
    paragraph.textContent = "test paragraph"

    container.appendChild(title)
    container.appendChild(image)
    container.appendChild(paragraph)

    contentContainer.appendChild(container)

}