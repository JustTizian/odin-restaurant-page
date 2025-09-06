import spag from "./spaghetti2.jpg"
const contentContainer = document.querySelector('#content')

export default function(){
    const container = document.createElement("div")
    const title = document.createElement("h1")
    title.textContent = "Menu"

    const image = document.createElement("img")
    image.src = spag

    const paragraph = document.createElement("p")
    paragraph.textContent = "As you can see, we have lots of different spaghettis!"

    container.appendChild(title)
    container.appendChild(image)
    container.appendChild(paragraph)

    contentContainer.appendChild(container)

}