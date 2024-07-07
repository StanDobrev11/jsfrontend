function deleteByEmail() {
    // get inputElement & resultElement & tbody trElements
    const inputElement = document.querySelector('input[name=email]')
    const resultElement = document.querySelector('#result')
    const trElements = document.querySelectorAll('tbody tr')

    let isDeleted = false
    trElements.forEach(trElement => {
        // get cell tdElement containing email
        const tdElement = trElement.querySelectorAll('td')[1]

        if (tdElement.textContent === inputElement.value && inputElement.value !== '') {
            trElement.remove()
            isDeleted = true 
        } 

    })

    isDeleted
        ? resultElement.textContent = 'Deleted.'
        : resultElement.textContent = 'Not found.'

    inputElement.value = ''
}