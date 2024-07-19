window.addEventListener("load", solve);

function solve() {

    // change here
    const addButtonId = 'add-btn'
    const editButtonClass = 'btn edit'
    const editButtonText = 'edit'
    const doneButtonclass = 'btn ok'
    const doneButtonText = 'ok'

    const firstInputId = 'player'
    const secondInputId = 'score'
    const thirdInputId = 'round'
    const ulFromInputId = 'sure-list'
    const ulFinalId = 'scoreboard-list'
    const liElementClassName = 'dart-item'


    const addButton = document.getElementById(addButtonId)
    const deleteButton = document.querySelector(`.btn.clear`)
    const firstInput = document.getElementById(firstInputId)
    const secondInput = document.getElementById(secondInputId)
    const thirdInput = document.getElementById(thirdInputId)

    const ulFromInput = document.getElementById(ulFromInputId)
    const ulFinalElement = document.getElementById(ulFinalId)

    const inputMapper = {}
    inputMapper[firstInputId] = firstInput      
    inputMapper[secondInputId] = secondInput
    inputMapper[thirdInputId] = thirdInput
    
    deleteButton.addEventListener('click', () => {
        location.reload()
    })

    addButton.addEventListener('click', () => {
        if (checkValidInput()) {
            const liElement = createLiRecordElement()
            ulFromInput.appendChild(liElement)
            clearInputFields()
            addButton.setAttribute('disabled', true)
        }
    })

    function createDetailsArticle() {
        const articleElement = document.createElement('article')

        for (let i = 0; i < Object.keys(inputMapper).length; i++) {
            inputId = Object.keys(inputMapper)[i]
            const pElement = document.createElement('p')
            const name = capsFirstLetter(inputId)
            if (i === 0) {
                pElement.textContent = inputMapper[inputId].value
            } else {
                pElement.textContent = `${name}: ${inputMapper[inputId].value}`
            }
            articleElement.appendChild(pElement)
        }
        // Object.keys(inputMapper)
        //     .forEach(inputId => {
        //         const pElement = document.createElement('p')
        //         const name = capsFirstLetter(inputId)
        //         pElement.textContent = `${name}:${inputMapper[inputId].value}`
        //         articleElement.appendChild(pElement)
        //     })

        return articleElement
    }

    function populateInputFields(inputValues) {
        inputsArray().map((input, i) => input.value = inputValues[i])
    }

    function createButtons() {
        
        const divFragment = document.createDocumentFragment()

        const editButton = document.createElement('button')
        editButton.textContent = editButtonText
        editButton.className = editButtonClass
        editButton.addEventListener('click', (e) => {
            const liElement = e.target.parentElement
            const articleElement = liElement.querySelector('article')
            const inputValues = []
            for (let i = 0; i < Array.from(articleElement.children).length; i++) {
                if (i === 0) {
                    inputValues.push(Array.from(articleElement.children)[i].textContent)
                } else {
                    inputValues.push(Array.from(articleElement.children)[i].textContent.split(': ')[1])
                }
            }
            populateInputFields(inputValues)
            addButton.removeAttribute('disabled')
            liElement.remove()
        })


        const doneButton = document.createElement('button')
        doneButton.textContent = doneButtonText
        doneButton.className = doneButtonclass
        doneButton.addEventListener('click', (e) => {
            const liElement = e.target.parentElement
            ulFinalElement.appendChild(liElement)
            addButton.removeAttribute('disabled')
            editButton.remove()
            doneButton.remove()
        })

        divFragment.appendChild(editButton)
        divFragment.appendChild(doneButton)

        return divFragment
    }


    function createLiRecordElement() {

        const liElement = document.createElement('li')
        liElement.className = liElementClassName

        const articleElement = createDetailsArticle()
        const divButtonsElement = createButtons()

        liElement.appendChild(articleElement)
        liElement.appendChild(divButtonsElement)

        return liElement
    }

    function capsFirstLetter(text) {
        return text.split('')[0].toUpperCase() + text.substring(1)
    }

    function clearInputFields() {
        inputsArray().map(input => input.value = '')
    }

    function inputsArray() {
        return Object.values(inputMapper)
    }

    function checkValidInput() {
        return inputsArray().every(input => input.value !== '')
    }

    }
  