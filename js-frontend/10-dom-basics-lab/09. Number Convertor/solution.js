function solve() {
    document.querySelector('button').addEventListener('click', onClick);

    // get To element and provide the 'binary' and 'hexadecimal' options
    const selectToElement = document.querySelector('#selectMenuTo')
    const optionSelection = ['Binary', 'Hexadecimal']
    
    optionSelection.forEach(option => {
        const optionElement = document.createElement('option')
        optionElement.value = option.toLowerCase()
        optionElement.textContent = option
        selectToElement.append(optionElement)
    })
    
        
    function onClick() {
        // read the TO value
        selectedToIndex = selectToElement.options.selectedIndex
        selectedToValue = selectToElement[selectedToIndex].value
        
        // read the number to convert and output element 
        const number = Number(document.querySelector('#input').value)
        const outputElement = document.querySelector('#result')

        const converter = {
            'binary': convertToBinary,
            'hexadecimal': convertToHexadeciaml,
        }

        outputElement.value = converter[selectedToValue](number)

    }

    function convertToHexadeciaml(number) {
        return number.toString(16).toUpperCase()
    }

    function convertToBinary(number) {
        return number.toString(2);
    }

}