function editElement(element, match, replacer) {

    // take the content of the element
    // This is OK but not working in judge
    // element.textContent = element.textContent.replaceAll(match, replace)
    

    // while (element.textContent.includes(match)) {
    //     element.textContent = element.textContent.replace(match, replacer)
    // }

    // Regex
    element.textContent = element.textContent.replace(new RegExp(match, 'g'), replacer)
}
    
    
