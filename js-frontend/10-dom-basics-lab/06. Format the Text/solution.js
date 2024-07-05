function solve() {
    const outputElement = document.getElementById('output')
    const text = document.getElementById('input').value

    const result = text
        .split('.') //splits it by the dot, with spaces
        .filter(sentence => !!sentence) // after last . filter undefuned el
        // .map(sentance => sentance.replace('.', ''))
        .reduce((result, sentance, i) => {  // every 3rd sentece group together
            const resultIndex = Math.floor(i / 3);
            if (!result[resultIndex]) {
                result[resultIndex] = []
            }
            result[resultIndex].push(sentance.trim())

            return result
        }, [])
        .map(element => `<p>${element.join('. ')}.</p>`) // adds para and . at the last para
        // .join('\n')
    
    outputElement.innerHTML = result // all in the output together DO NOT USE POSSIBLE INJECTIONS
    console.log(result)
}

// function solve() {
//     const text = document.getElementById('input').value
//     const outputElement = document.getElementById('output')
//     const textArray = text.split('.').map(item => {
//         item.trim()
//         return item
//     })
    
//     let resultString = ''
//     const resultArray = []
//     for (let i = 0; i < textArray.length; i++) {
//         if (i % 3 === 0 && i !== 0) {
//             resultArray.push(resultString)
//             resultString = textArray[i]
//         } else {
//             resultString += textArray[i]
//         }
//     }

//     if (resultString !== '') {
//         resultArray.push(resultString)
//     }

//     const result = resultArray.map(item => {
//         const pElement = document.createElement('p')
//         pElement.textContent = item

//         return pElement
//     })
    
//     console.log(resultArray)
//     console.log(result)
    
// }

solve('this is first sentance. this is second. this is third. And this is forth. Fifth. Sixth. Seventh. Eight. Nine. 10.')