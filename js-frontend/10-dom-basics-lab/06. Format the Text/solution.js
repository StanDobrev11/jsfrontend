function solve() {
    const text = document.getElementById('input').value
    const outputElement = document.getElementById('output')
    const textArray = text.split('. ')
    
    let resultString = ''
    const resultArray = []
    for (let i = 0; i < textArray.length; i++) {
        if (i % 3 === 0 && i !== 0) {
            resultArray.push(resultString)
            resultString = textArray[i]
        } else {
            resultString += textArray[i]
        }
    }

    if (resultString !== '') {
        resultArray.push(resultString)
    }

    resultArray.map(item => `<p>${item}</p>`)
    
    outputElement.textContent = resultArray
}

