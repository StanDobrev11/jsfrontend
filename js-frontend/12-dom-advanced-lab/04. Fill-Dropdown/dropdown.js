function addItem() {
    const textInputElement = document.getElementById('newItemText')
    const valueInputElement = document.getElementById('newItemValue')
    const menuElement = document.getElementById('menu')

    const optionElement = document.createElement('option')
    optionElement.textContent = textInputElement.value
    optionElement.value = valueInputElement.value
    
    menuElement.appendChild(optionElement)
    textInputElement.value = ''
    valueInputElement.value = ''
}