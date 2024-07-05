function solve() {
  
    const approvedConventions = {
        "Camel Case": camelCase, 
        "Pascal Case": pascalCase
    }

    function pascalCase(text) {
        return text
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace(word[0], word[0].toUpperCase()))
                .join('')
    }

    function camelCase(text) {
        let pascalResult = pascalCase(text)
        return pascalResult.replace(pascalResult[0], pascalResult[0].toLowerCase())
    }

    const textElement = document.getElementById('text')
    const namingConvElement = document.getElementById('naming-convention')
    const resultElement = document.getElementById('result')

    const text = textElement.value
    const convention = namingConvElement.value

    if (!approvedConventions[convention]) {
        return resultElement.textContent = 'Error!'
    }
    
    return resultElement.textContent = approvedConventions[convention](text)
    
}

// solve("this is an example", "Camel Case")
// solve("secOND eXamPLE", "Pascal Case")
// solve("Invalid Input", "Another Case")