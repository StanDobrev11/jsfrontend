function solve() {
    const generateButtonElement = document.querySelector('#exercise button')
    const tbodyElement = document.querySelector('tbody')
    const buyButtonElement = document.querySelector('#exercise button:last-child')
    
    let totalPrice = 0
    let decFactor = 0
    let nameList = []

    // tbodyElement.addEventListener('change', (e) => {
    //     const trElement = e.target.parentElement.parentElement
    //     let name = trElement.querySelector('td:nth-child(2) p').textContent
    //     let price = Number(trElement.querySelector('td:nth-child(3) p').textContent)
    //     let decorationFactor = Number(trElement.querySelector('td:nth-child(4) p').textContent)
        
    //     if (e.target.checked) {
    //         nameList.push(name)
    //         totalPrice += price
    //         decFactor += decorationFactor
    //     } else {
    //         nameList = nameList.filter(item => item !== name)
    //         totalPrice -= price
    //         decFactor -= decorationFactor
    //     }

    // })

    buyButtonElement.addEventListener('click', () => {
        const outputTextarea = document.querySelector('#exercise textarea:last-of-type')
        const inputElements = tbodyElement.querySelectorAll('input')

        inputElements.forEach(input => {
            const trElement = input.parentElement.parentElement
            let name = trElement.querySelector('td:nth-child(2) p').textContent
            let price = Number(trElement.querySelector('td:nth-child(3) p').textContent)
            let decorationFactor = Number(trElement.querySelector('td:nth-child(4) p').textContent)
            
            if (input.checked && !nameList.includes(name)) {
                nameList.push(name)
                totalPrice += price
                decFactor += decorationFactor
            } else if (!input.checked && nameList.includes(name)) {
                nameList = nameList.filter(item => item !== name)
                totalPrice -= price
                decFactor -= decorationFactor
            }
        })

        outputTextarea.textContent = 
            `Bought furniture: ${nameList.join(', ')}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${decFactor / nameList.length}`
    })
    
    generateButtonElement.addEventListener('click', () => {
        const textareaElement = generateButtonElement.parentElement.querySelector('textarea')
        const textArrayJson = JSON.parse(textareaElement.value)

        const tbodyElementFragment = document.createDocumentFragment()

        textArrayJson.forEach(furniture => {
            const trElement = document.createElement('tr')
            Object.keys(furniture).forEach(key => {   
                const tdElement = document.createElement('td')
                if (key === 'img') {
                    const imgElement = document.createElement('img')
                    imgElement.src = furniture[key]
                    tdElement.appendChild(imgElement)
                } else {
                    const pElement = document.createElement('p')
                    pElement.textContent = furniture[key]
                    tdElement.appendChild(pElement)
                }
                trElement.appendChild(tdElement)
            })
            const nameTdElement = trElement.firstElementChild
            const imgTdElement = nameTdElement.nextElementSibling
            trElement.insertBefore(imgTdElement, nameTdElement)

            const tdElement = document.createElement('td')
            const inputCheckboxElement = document.createElement('input')
            inputCheckboxElement.type = 'checkbox'

            tdElement.appendChild(inputCheckboxElement)
            trElement.appendChild(tdElement)
            tbodyElementFragment.appendChild(trElement)
        });
        tbodyElement.appendChild(tbodyElementFragment)
    })
}