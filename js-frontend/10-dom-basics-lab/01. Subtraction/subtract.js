function subtract() {

    const firstNumberElement = document.getElementById('firstNumber')
    const secondNumberElement = document.getElementById('secondNumber')
    const resultElement = document.getElementById('result')

    const firstNum = Number(firstNumberElement.value)
    const secondNum = Number(secondNumberElement.value)

    
    resultElement.textContent = firstNum - secondNum
    
}