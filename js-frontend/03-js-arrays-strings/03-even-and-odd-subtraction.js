function solve(array) {
    let evenSum = array.filter(x => Math.abs(x) % 2 === 0).reduce((sum, x) => sum + x, 0)
    let oddSum = array.filter(x => Math.abs(x) % 2 === 1).reduce((sum, x) => sum + x, 0)

    console.log(evenSum - oddSum)
}


solve([-1,3,0,4])