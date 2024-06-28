function numberModification(number) {
    function getNumbersSum(array) {
        return array.map(x => Number(x)).reduce((a, b) => a + b)
    }
    
    array = number.toString().split('')
    
    let sum = getNumbersSum(array)

    while (sum / array.length < 5) {
        array.push('9')
        sum = getNumbersSum(array)
    }

    console.log(array.join(''))

}


numberModification(101)