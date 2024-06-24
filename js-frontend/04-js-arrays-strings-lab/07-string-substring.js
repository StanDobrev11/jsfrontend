function solve(word, text) {

    let pattern = new RegExp(`\\b${word}\\b`, 'i')

    if (pattern.test(text)){
        console.log(`${word}`)        
    } else {
        console.log(`${word} not found!`)
    }

}



solve('javascript', 'JavaScript is the bestprogramming language JavaScriptis the best programming language')
// solve('python', 'JavaScript is the bestprogramming language')