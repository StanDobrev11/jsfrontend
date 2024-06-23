function solve(n, array) {
    array
    .splice(n)
    array.reverse()
    console.log(array.join(' '))
}

solve(4, [-1, 20, 99, 5])