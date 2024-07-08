function solve() {
    const checkButtonElement = document.querySelector('tfoot button:first-child')
    const clearButtonElement = document.querySelector('tfoot button:last-child')
    const outputElement = document.getElementById('check')

    const trElements = document.querySelectorAll('tbody tr')

    checkButtonElement.addEventListener('click', checkVertical)


    // check vertical
    function checkVertical() {
        const tdElements = document.querySelectorAll('tbody td')
        
        const resultArray = []
        let n = 0
        for (let i = 0; i < 9; i++) {
            resultArray.push(tdElements[n])
            n += 3
            if (n >= tdElements.length) {
                n %= tdElements.length - 1
            }
        }
        console.dir(resultArray)
        
    }

    // check horizontal
    function checkHorizontal() {
        trElements.forEach(tr => {
            let colSum = 0
            let isValid = false
            const colInputs = tr.querySelectorAll('input')
            
            colInputs.forEach(input => {
                colSum += Number(input.value)
            })
            if (colSum === 6) {
                isValid = true
            }
            console.log(isValid)
        })
    }

}