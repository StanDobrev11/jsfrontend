function addItem() {

    const inputElement = document.querySelector("#newItemText")
    const ulListElements = document.getElementById('items')

    //create a element
    const aElement = document.createElement('a')
    aElement.textContent = '[Delete]'
    aElement.href = '#'
    aElement.onclick = deleteParentElement

    // create li element and attach a element
    const newLiElement = document.createElement('li')
    newLiElement.textContent = inputElement.value
    newLiElement.appendChild(aElement)

    // append the li element
    ulListElements.appendChild(newLiElement)

    // clear input element
    inputElement.value = ''

    function deleteParentElement() {
        // newLiElement.remove()
        this.parentElement.remove()
    }
}

