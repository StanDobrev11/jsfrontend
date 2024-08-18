window.addEventListener("load", solve);

function solve() {

    const addButtonId = 'add-btn'
    const editButtonClass = 'edit-btn'
    const editButtonText = 'Edit'
    const nextButtonclass = 'next-btn'
    const nextButtonText = 'Next'
    const archiveButtonClass = 'archive-btn'
    const archiveButtonText = 'Archive'

    const firstInputId = 'name'
    const secondInputId = 'time'
    const thirdInputId = 'description'
    const ulFromInputId = 'preview-list'
    const ulFinalId = 'archive-list'

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

    addButton.addEventListener('click', (e) => {
        e.preventDefault()
        if (checkValidInput()) {
            const liElement = createLiRecordElement()
            ulFromInput.appendChild(liElement)
            clearInputFields()
            addButton.setAttribute('disabled', true)
        }
    })

    function createButtons() {
        
        const divElement = document.createElement('div')
        divElement.className = 'buttons'

        const editButton = document.createElement('button')
        editButton.textContent = editButtonText
        editButton.className = editButtonClass
        editButton.addEventListener('click', (e) => {
            const liElement = e.target.parentElement.parentElement
            const articleElement = liElement.querySelector('article')
            const inputValues = []
            Array.from(articleElement.children)
                .forEach(element => {
                    inputValues.push(element.textContent)
                })
          
            populateInputFields(inputValues)
            addButton.removeAttribute('disabled')
            liElement.remove()
        })


        const nextButton = document.createElement('button')
        nextButton.textContent = nextButtonText
        nextButton.className = nextButtonclass
        nextButton.addEventListener('click', (e) => {
            
            const liElement = e.target.parentElement.parentElement

            const divButtons = liElement.querySelector('.buttons')
            divButtons.remove()
            
            const archiveButton = document.createElement('button')
            archiveButton.className = archiveButtonClass
            archiveButton.textContent = archiveButtonText
            liElement.appendChild(archiveButton)
            ulFinalElement.appendChild(liElement)
            
            
            archiveButton.addEventListener('click', (e) => {
                liElement.remove()
                addButton.removeAttribute('disabled')
            })
                        
        })

        divElement.appendChild(editButton)
        divElement.appendChild(nextButton)

        return divElement
    }


    function createDetailsArticle() {
        const articleElement = document.createElement('article')

        for (let i = 0; i < Object.keys(inputMapper).length; i++) {
            inputId = Object.keys(inputMapper)[i]
            const pElement = document.createElement('p')
            pElement.textContent = inputMapper[inputId].value
            articleElement.appendChild(pElement)
        }

        return articleElement
    }

    function createLiRecordElement() {

        const liElement = document.createElement('li')

        const articleElement = createDetailsArticle()
        const divButtonsElement = createButtons()

        liElement.appendChild(articleElement)
        liElement.appendChild(divButtonsElement)

        return liElement
    }
    function checkValidInput() {
        return inputsArray().every(input => input.value !== '')
    }

    function inputsArray() {
        return Object.values(inputMapper)
    }

    function clearInputFields() {
        inputsArray().map(input => input.value = '')
    }

    function populateInputFields(inputValues) {
        inputsArray().map((input, i) => input.value = inputValues[i])
    }
}