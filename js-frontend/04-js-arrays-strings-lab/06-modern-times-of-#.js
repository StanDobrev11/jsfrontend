function solve(string) {

    const pattern = /(?<=#)[a-zA-Z]+/g
    const array = string.match(pattern, string)

    array.forEach(element => {
        console.log(element)
    });

}


solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')

