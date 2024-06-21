function solve(value) {
    if ((value % 4 === 0 && value % 100 !== 0 || value % 400 === 0)) {
        console.log('yes');
    } else {
        console.log('no')
    }
}

solve(4)
solve(2023)
solve(2000)