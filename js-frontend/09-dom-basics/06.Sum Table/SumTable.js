function sumTable() {
    const sumElement = document.querySelector('#sum')
    const lastColumnElements = 
        document.querySelectorAll
        ('table tbody tr:not(:first-child):not(:last-child) td:nth-child(even)')
        // ('tr td:nth-child(even):not(#sum)')


    sumElement.textContent = Array
        .from(lastColumnElements)
        .reduce((sum, num) => sum += Number(num.textContent), 0)

    // console.log(lastColumnElements)

    // const elementsArray = []
    // lastColumnElements.forEach(el => elementsArray.push(Number(el.textContent)))

    // console.log(elementsArray)
    
    // sumElement.textContent = 
    //     elementsArray.reduce((sum, num) => sum += num)
}