window.addEventListener("load", solve);

function solve() {

    const adoptButtonElement = document.getElementById('adopt-btn')
    const typeElement = document.getElementById('type')
    const ageElement = document.getElementById('age')
    const genderSelect = document.getElementById('gender')

    const ulInfoElement = document.getElementById('adoption-info')
    const ulAdoptedElement = document.getElementById('adopted-list')

    adoptButtonElement.addEventListener('click', (event) => {
        event.preventDefault()
        
        let genderElement = document.querySelector('option:checked')

        const type = typeElement.value
        const age = ageElement.value
        const gender = genderElement.value
        const genderIndex = genderElement.index

        const liElement = document.createElement('li')
        const articleElement = document.createElement('article')
        
        const pElementType = document.createElement('p')
        pElementType.textContent = `Pet:${type}`

        const pElementGender = document.createElement('p')
        pElementGender.textContent = `Gender:${gender}`

        const pElementAge = document.createElement('p')
        pElementAge.textContent = `Age:${age}`

        articleElement.appendChild(pElementType)
        articleElement.appendChild(pElementGender)
        articleElement.appendChild(pElementAge)

        const divElement = document.createElement('dvi')
        divElement.classList.add('buttons')

        const buttonEdit = document.createElement('button')
        buttonEdit.textContent = 'Edit'
        buttonEdit.className = 'edit-btn'
        const buttonDone = document.createElement('button')
        buttonDone.textContent = 'Done'
        buttonDone.className = 'done-btn'  

        divElement.appendChild(buttonEdit)
        divElement.appendChild(buttonDone)
        
        liElement.appendChild(articleElement)
        liElement.appendChild(divElement)

        ulInfoElement.appendChild(liElement)

        typeElement.value = ''
        ageElement.value = ''
        genderSelect.selectedIndex = 0

        buttonEdit.addEventListener('click', () => {
            typeElement.value = type
            ageElement.value = age
            genderSelect.selectedIndex = genderIndex

            liElement.remove()
        })

        buttonDone.addEventListener('click', () => {
            divElement.remove()

            const buttonClear = document.createElement('button')
            buttonClear.className = 'clear-btn'
            buttonClear.textContent = 'Clear'

            liElement.appendChild(buttonClear)

            ulAdoptedElement.appendChild(liElement)          

            buttonClear.addEventListener('click', () => {
                liElement.remove()
            })

        })

    });

}