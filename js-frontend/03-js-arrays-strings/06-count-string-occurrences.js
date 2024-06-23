function solve(text, string) {
    
   
    let pattern = new RegExp(`\\b(?:${string})\\b`, 'g')
    let result = text.match(pattern)

    if (result) {
        return console.log(result.length)
    }

    console.log('0')
}

solve('softuni is great place for learning new programming languages', '0')