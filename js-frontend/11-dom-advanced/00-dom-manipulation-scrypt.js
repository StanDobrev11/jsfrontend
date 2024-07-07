const movieListElement = document.getElementById('movies')

// get first element
const firstLiElement = document.getElementById('first-movie')

// creating html elements
const secondLiElement = document.createElement('li')
secondLiElement.textContent = 'Man In Black'

// attaching newly created element to DOM
movieListElement.appendChild(secondLiElement)


// appending existing element -> strip the element from one location and attach it to new
const noChildMovieElement = document.getElementById('no-child-movies')
noChildMovieElement.appendChild(firstLiElement)

// cloning of exisiting element -> cloned the HTML tag element -> NO CONTENT
const firstMovieCloneElement = firstLiElement.cloneNode(true) // (true) will clone all tree below inc text
noChildMovieElement.append(firstMovieCloneElement)
setTimeout(() => {
    firstMovieCloneElement.textContent += ' cloned'
}, 1000)


// prepend child places the child as first element
const prependLiElement = document.createElement('li')
prependLiElement.textContent = 'Going ON TOP after 2 seconds'
setTimeout(() => {
    movieListElement.prepend(prependLiElement)
}, 2000)
