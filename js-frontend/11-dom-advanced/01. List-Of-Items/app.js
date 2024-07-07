function addItem() {
    // get the value to append
    const inputElement = document.querySelector("#newItemText")

    // get the ul list
    const ulListElements = document.getElementById('items')

    // create li element 
    const newLiElement = document.createElement('li')
    newLiElement.textContent = inputElement.value

    // append the element
    ulListElements.appendChild(newLiElement)

    // clear input element
    inputElement.value = ''
}