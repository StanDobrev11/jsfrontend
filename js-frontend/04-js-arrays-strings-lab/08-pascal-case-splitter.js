function solve(string) {

    const stringAsArray = string.split('')
    const resultArray = []

    let word = '';
    stringAsArray.forEach(element => {
        if (element === element.toUpperCase(element) && word !== '') {
            resultArray.push(word)
            word = ''
            word += element
        } else {
            word += element
        }
  
    }) 
    resultArray.push(word)
    console.log(resultArray.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')