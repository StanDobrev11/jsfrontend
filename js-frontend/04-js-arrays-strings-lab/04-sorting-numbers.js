function solve(array) {
    
    array.sort((a, b) => a - b)

    let resultArray = []

    const arrayLength = array.length
    let iters = 0
    while (iters < arrayLength) {

        if (iters % 2 == 0) {
            resultArray.push(array.shift())
        } else {
            resultArray.push(array.pop())
        }

        iters += 1
    }
 
    return resultArray
}


console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))
// [-3, 65, 1, 63, 3, 56, 18, 52, 31, 48]
// [-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
