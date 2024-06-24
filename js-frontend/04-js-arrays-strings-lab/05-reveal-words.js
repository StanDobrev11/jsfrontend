function solve(string, template) {
    
    let stringAsList = string.split(', ');
    let word;
    while (stringAsList.length) {
        word = stringAsList.shift()
        let startCount = word.length
        template = template.replace("*".repeat(startCount), word)
    }
    
    return template
}



// console.log(solve('great','softuni is ***** place for learning new programming languages'))
console.log(solve('great, learning', 'softuni is ***** place for ******** new programming languages'))