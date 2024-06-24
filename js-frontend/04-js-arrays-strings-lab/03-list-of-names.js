function solve(array) {
    
    let startNum = 1
    array.sort()
    for (let i = 0; i < array.length; i++) {
        console.log(`${startNum}.${array[i]}`)
        startNum += 1
    }
}

solve(["John", "Bob", "Christina", "Ema", "Ema"])