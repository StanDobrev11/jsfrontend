const movieListElement = document.getElementById('movies')

const liveElementsCollection = movieListElement.children
const liveNodeList = movieListElement.childNodes
const staticNodeList = document.querySelectorAll('#movies li')

console.log('Live HTML Collection')
console.dir(liveElementsCollection)
console.log('Live NodeList')
console.dir(liveNodeList)
console.log('Static NodeList -> when manipulated, does not reflect the webpage')
console.dir(staticNodeList)

setTimeout(() => {
    const movieLiElement = document.createElement('li')
    movieLiElement.textContent = 'Gone in 60 seconds'
    movieListElement.appendChild(movieLiElement)

    console.log('After execution and manipilation of DOM')
    console.log('Live HTML Collection')
    console.dir(liveElementsCollection)
    console.log('Live NodeList')
    console.dir(liveNodeList)
    console.log('Static NodeList')
    console.dir(staticNodeList)

}, 3000)

