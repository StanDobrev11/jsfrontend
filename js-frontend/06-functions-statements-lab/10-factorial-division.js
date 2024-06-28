function solve(a, b) {

    function factorialRecursive(target, result = 1) {
        if (target === 1) {
            return result
        }
    
        return factorialRecursive(target - 1, result * target)

    }

    const aFactorial = factorialRecursive(a)
    const bFactorial = factorialRecursive(b)

    const division = aFactorial / bFactorial

    console.log(division.toFixed(2))
}
// 
solve(5, 2)