function encodeAndDecodeMessages() {
    const mainContentElement = document.getElementById('main')
    const inputElement = mainContentElement.firstElementChild
    const outputElement = mainContentElement.lastElementChild

    const buttonInputElement = inputElement.querySelector('button')
    const buttonOutputElement = outputElement.querySelector('button')
    
    buttonInputElement.addEventListener('click', () => {
        const messageElement = inputElement.querySelector('textarea')
        const decriptedMessage = messageElement.value

        const encriptedMessage = 
            decriptedMessage
                .split('')
                .map((_, i) => decriptedMessage.charCodeAt(i) + 1)
                .map((num) => String.fromCharCode(num))
                .join('')

        outputElement.querySelector('textarea').value = encriptedMessage   
        messageElement.value = ''
    })

    buttonOutputElement.addEventListener('click', () => {
        const messageElement = outputElement.querySelector('textarea')
        const encriptedMessage = messageElement.value
        
        const decriptedMessage = 
            encriptedMessage
                .split('')
                .map((_, i) => encriptedMessage.charCodeAt(i) - 1)
                .map((num) => String.fromCharCode(num))
                .join('')

        outputElement.querySelector('textarea').value = decriptedMessage
    })
}