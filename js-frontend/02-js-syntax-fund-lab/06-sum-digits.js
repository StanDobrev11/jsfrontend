function solve(value) {
    
    let result = 0;
    const numString = String(value);

    for (i = 0; i <= numString.length - 1; i++) {
        result += Number(numString[i])
    }
    
    console.log(result)
}

solve(97561)