// function solve(string, count) {
//     function solveRecursivly(string, count) {
//         if (count === 1) {
//             return string
//         }

//         return string + solveRecursivly(string, count - 1)
//     }

//     return solveRecursivly(string, count)
// }


function solve(string, count) {
    function solveRecursivly(string, count, accumulator) {
        if (count === 1) {
            return accumulator
        }

        return solveRecursivly(string, count - 1, string + accumulator)
    }

    return solveRecursivly(string, count, string)
}

console.log(solve('abc', 3))

