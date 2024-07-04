console.log('Hello from external script file')

const textInputElement = document.getElementById('uName')
console.log(textInputElement)

setTimeout(() => {
    textInputElement.value = 'teeest'
}, 2000)
// HTMLCollection()
const fancyElements = document.getElementsByClassName('fancy')
console.log(fancyElements)

//querySeclectors

const firstInput = document.querySelector('input[type=text]')
console.log(firstInput)

console.log(document.querySelector('#uName'))

//get all input type text elements -> Static NodeList() collection
const inputTextElements = document.querySelectorAll('input')
console.log(inputTextElements)

console.log('NodeList VS HTMLCollection')
console.log('Static Node List')
const contentStaticNodeList = document.querySelectorAll('#content > *')
console.log(contentStaticNodeList)

console.log('Live Node List')
const contentElement = document.querySelector('#content')
const contentLiveNodeList = contentElement.childNodes
console.log(contentLiveNodeList)
console.log('HTML Collection')
const contentHtmlCollection = contentElement.children
console.log(contentHtmlCollection)


// remove element 
setTimeout(() => {
    contentHtmlCollection.item(0).remove()
}, 3000) 

console.log(contentHtmlCollection)

// iterating collections -> for .. of ..
console.log('iterating collections -> for .. of ..')
const listElements = document.querySelector('ol')

console.log('Live HTML Collection')
for (const liveNodeChildren of listElements.children) {
    console.log(liveNodeChildren)
}
console.log('Live NodeList')
for (const liveNodeChildren of listElements.childNodes) {
    console.log(liveNodeChildren)
}

console.log('Live node list can be forEach')

// convert to Array
console.log('Convert to array')
let htmlElementsArray = Array.from(listElements.childNodes)
// let htmlElementsArray = [...listElements.childNodes]
console.log(htmlElementsArray)

// get parrent
console.log('Get parrent')
console.log(firstInput.parentElement)
console.log(firstInput.parentNode)