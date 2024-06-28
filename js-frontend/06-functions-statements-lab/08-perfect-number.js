function solve(number) {
    const result = [1, ]

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            result.push(i);
        }
    }

    const sum = result.reduce((a, b) => a + b)
    
    if (number === sum) {
        console.log("We have a perfect number!")
    } else {
        console.log("It's not so perfect.")
    }
    
}

solve(28)