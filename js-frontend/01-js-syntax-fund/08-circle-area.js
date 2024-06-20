function solve(number) {
    if (typeof number === 'number') {
        const area = Math.PI * number ** 2;
        console.log(area.toFixed(2))
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof number}.`)
    }
}

solve(5)
solve('name')