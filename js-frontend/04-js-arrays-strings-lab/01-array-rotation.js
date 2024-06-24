function solve(array, count) {
    
    for (let i = 0; i < count; i++) {
        let number = array.shift()
        array.push(number)
    }
    
    console.log(array.join(' '))
}

solve([32, 21, 61, 1], 4)