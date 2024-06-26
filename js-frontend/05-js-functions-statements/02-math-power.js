function solve(number, power) {

    let i = 1
    let innerResult = 1
    let result = function powerRecursion(number, i) {
               
        if (i > power) {
            return innerResult
        }
        
        innerResult *= number 
        powerRecursion(number, i + 1)
        
    }

    result(number, i)
    return innerResult
}

function solvePower(number, power) {
    function powerRecursion(number, power) {
        if (power === 0) {
            return 1;
        }
        return number * powerRecursion(number, power - 1);
    }

    return powerRecursion(number, power);
}


console.log(solve(2, 8))