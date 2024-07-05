function generateReport() {
    
    // value returned from a checkbox
    const thElements = document.querySelectorAll('thead tr th')
    const trElements = document.querySelectorAll('tbody tr')
    const outputElement = document.getElementById('output')

    // get true or false of the table head and get head labels
    const checkedObj = new Map()
    for (let i = 0; i < thElements.length; i++) {
        if (thElements[i].querySelector('input').checked) {
            checkedObj[i] = thElements[i].querySelector('input').name
        }
    }


    const resultArray = []
    for (let rowElement of trElements) {
        const currentValues = {}
        // console.log(rowElement.querySelectorAll('td')[2])
        for (let num of Object.keys(checkedObj)) {
            currentValues[checkedObj[num]] = rowElement.querySelectorAll('td')[num].textContent
        }

        resultArray.push(currentValues)

    }
    outputElement.textContent = JSON.stringify(resultArray, null, 2)

}