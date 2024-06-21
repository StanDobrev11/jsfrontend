function solve(start, end) {

    let numbers = start
    let sum = 0

    for (i=start + 1; i <= end; i++) {
        numbers = numbers + ' ' + i
        sum += i
    }

    console.log(numbers)
    console.log(`Sum: ${sum + start}`)
}


solve(5, 10)
solve(0, 26)