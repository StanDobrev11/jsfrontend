function solve(array, step) {
    let resultArray = []
    for (let i = 0; i < array.length; i += step) {
        resultArray.push(array[i])
        
    }
    
    return resultArray

}


function quickSolve(array, step) {
    const result = array.filter((element, index) => index % step === 0)

    return result
}

solve(['5','20','31','4','20'], 2)
quickSolve(['5','20','31','4','20'], 2)

solve(['dsa', 'asd', 'test', 'tset'], 2)
solve(['dsa', 'asd', 'test', 'tset'], 2)
// solve(['1', '2', '3', '4', '5'], 6)