window.addEventListener("load", solve);

function solve() {
    
    const placeInput = document.getElementById('place')
    const actionInput = document.getElementById('action')
    const personInput = document.getElementById('person')

    const addButton = document.getElementById('add-btn')

    const ulTaskList = document.getElementById('task-list')
    const ulDoneElement = document.getElementById('done-list')

    addButton.addEventListener('click', () => {
        
        if (checkValidInput()) {
            const liElement = createLiRecordElement([
                placeInput.value,
                actionInput.value,
                personInput.value
            ])
            ulTaskList.appendChild(liElement)
            clearInputFields()
        }
    })

    function clearInputFields() {
        placeInput.value = '',
        actionInput.value = '',
        personInput.value = ''
    }

    function populateInputFields([place, action, person]) {
        placeInput.value = place,
        actionInput.value = action,
        personInput.value = person
    }

    function createButtonsDiv() {
        const divButtons = document.createElement('div')
        divButtons.className = 'buttons'

        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.className = 'edit'
        editButton.addEventListener('click', (e) => {
            const liElement = e.target.parentElement.parentElement
            const articleElement = liElement.querySelector('article')
            const details = Array.from(articleElement.children).map(pEl => pEl.textContent.split(':')[1])

            populateInputFields(details)
            liElement.remove()
        })


        const doneButton = document.createElement('button')
        doneButton.textContent = 'Done'
        doneButton.className = 'done'
        doneButton.addEventListener('click', (e) => {
            const liElement = e.target.parentElement.parentElement
            const divButtons = e.target.parentElement
            divButtons.remove()

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.className = 'delete'
            deleteButton.addEventListener('click', (e) => {
                const liElement = e.target.parentElement
                liElement.remove()
            })

            liElement.appendChild(deleteButton)
            ulDoneElement.appendChild(liElement)
        })

        divButtons.appendChild(editButton)
        divButtons.appendChild(doneButton)

        return divButtons
    }

    function createDetailsArticle([place, action, person]) {
        const articleElement = document.createElement('article')

        const pPlaceElement = document.createElement('p')
        pPlaceElement.textContent = `Place:${place}`
        articleElement.appendChild(pPlaceElement)

        const pActionELement = document.createElement('p')
        pActionELement.textContent = `Action:${action}`
        articleElement.appendChild(pActionELement)

        const pPersonELement = document.createElement('p')
        pPersonELement.textContent = `Person:${person}`
        articleElement.appendChild(pPersonELement)

        return articleElement
    }

    function createLiRecordElement(details) {

        const liElement = document.createElement('li')
        liElement.className = 'clean-task'

        const articleElement = createDetailsArticle(details)
        const divButtonsElement = createButtonsDiv()

        liElement.appendChild(articleElement)
        liElement.appendChild(divButtonsElement)

        return liElement
    }

    function checkValidInput() {
        if (placeInput.value !== '' && actionInput.value !== '' && personInput.value !== '') {
            return true
        }
        return false
    }
}