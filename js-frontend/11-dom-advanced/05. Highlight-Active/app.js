function focused() {
    const inputElements = document.querySelectorAll('div input')

    inputElements.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement
                .classList.add('focused')
        })
        input.addEventListener('blur', () => {
            input.parentElement
                .classList.remove('focused')
        })
    })

}