function validate() {
    const inputElement = document.getElementById('email')

    inputElement.addEventListener('change', () => {
        const input = inputElement.value
        
        validateEmail(input)
            ? inputElement.classList.remove('error')
            : inputElement.classList.add('error')
    })
    
    function validateEmail(input) {
        const pattern = /\b([a-z]+@[a-z]+\.[a-z]{2,})\b/g

        return input.match(pattern)
        
    }
}