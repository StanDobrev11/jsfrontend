function solve(number) {

    const numberArray = String(number).split('')
    let oddSum;
    let evenSum;

    try {
         evenSum = numberArray.filter(a => a % 2 === 0).reduce((a, b) => Number(a) + Number(b))
    } catch (TypeError) {
         evenSum = 0
    }

    try {
     oddSum = numberArray.filter(a => a % 2 !== 0).reduce((a, b) => Number(a) + Number(b))
    } catch (TypeError) {
        oddSum = 0
    }



    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}



solve(0)