function solve(sentence) {
    const regex = /\w+/gm    
    const matches = sentence.match(regex);
    
    for (let i = 0; i < matches.length; i++) {
        matches[i] = matches[i].toUpperCase()
    }

    console.log(matches.join(', '))

}

solve('Hi, how are you?')