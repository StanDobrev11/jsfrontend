function calc() {
    
    const firstInputElement = document.querySelector("#num1")
    const secondInputElement = document.querySelector("#num2")
    
    const sumElement = document.getElementById("sum")
    
    const firstNumber = Number(firstInputElement.value)
    const secondNumber = Number(secondInputElement.value)

    sumElement.value =  firstNumber + secondNumber
}
