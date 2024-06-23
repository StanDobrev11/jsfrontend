function solve(text, string) {
    const countOfString = string.length    
    
    let pattern = new RegExp(`${string}`, 'g')
    let result = text.replace(pattern, '*'.repeat(countOfString))

    console.log(result)
}

solve('Find the hidden word', 'hidden')