function solve(value) {
    
    let isSame = true
    let result = 0;
    const numString = String(value);

    for (let i = 0; i <= numString.length - 1; i++) {
        
        result += Number(numString[i])
        
        if (i > 0 && numString[i] !== numString[i - 1])
            isSame = false
            
    }
    console.log(isSame)
    console.log(result)
}


solve(2222222)
