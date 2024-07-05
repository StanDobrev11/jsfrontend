function toggle() {
    
    const buttonElement = document.querySelector('.head .button')
    const extraContentElement = document.getElementById('extra')

    if (buttonElement.textContent === 'More') {
        extraContentElement.style.display = 'block'
        buttonElement.textContent = 'Less'
    } else {
        extraContentElement.style.display = 'none'
        buttonElement.textContent = 'More'
    }
    
}