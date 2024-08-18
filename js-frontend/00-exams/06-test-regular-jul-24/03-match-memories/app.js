const baseUrl = 'http://localhost:3030/jsonstore/matches'

const loadButtonId = 'load-matches'
const addButtonId = 'add-match'
const editButtonId = 'edit-match'
const firstInputId = 'host'
const secondInputId = 'score'
const thirdInputId = 'guest'

const divElementClass = 'info'
const divButtonsId = 'buttons-wrapper'
const changeButtonClass = 'change-btn'
const changeButtonText = 'Change'
const deleteButtonClass = 'delete-btn'
const deleteButtonText = 'Delete'
const itemListElementClass = 'match'

const loadButton = document.getElementById(loadButtonId)
const addButton = document.getElementById(addButtonId)
const editButton = document.getElementById(editButtonId)

const firstInput = document.getElementById(firstInputId)
const secondInput = document.getElementById(secondInputId)
const thirdInput = document.getElementById(thirdInputId)
const ulListElement = document.getElementById('list')

addButton.addEventListener('click', async () => {
    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                host: firstInput.value,
                score: secondInput.value,
                guest: thirdInput.value,
            })
        });

        getAllRequest();
        clearInputFields();

    } catch (error) {
        console.error(error);
    }
});


editButton.addEventListener('click', async () => {
    
    const id = editButton.value
    try {
        await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                host: firstInput.value,
                score: secondInput.value,
                guest: thirdInput.value,
                _id: id
            })
        })

        getAllRequest()
        clearInputFields()

        addButton.removeAttribute('disabled')
        editButton.value = ''
        editButton.setAttribute('disabled', '')
        
    } catch (err) { console.log(err.message) }
})


loadButton.addEventListener('click', getAllRequest)

function createButtonsDiv() {
    const divButtons = document.createElement('div')
    divButtons.setAttribute('id', divButtonsId)

    const changeButton = document.createElement('button')
    changeButton.textContent = changeButtonText
    changeButton.className = changeButtonClass
    changeButton.addEventListener('click', (e) => {
        const divElement = e.target.parentElement.parentElement
        const id = divElement.getAttribute('id')

        const divContentElement = divElement.querySelector(`.${divElementClass}`)
        const details = Array.from(divContentElement.children).map(pEl => pEl.textContent)

        populateInputFields(details)
      
        editButton.removeAttribute('disabled')
        editButton.value = id
        addButton.setAttribute('disabled', '')

    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = deleteButtonText
    deleteButton.className = deleteButtonClass

    deleteButton.addEventListener('click', async (e) => {
        const divElement = e.target.parentElement.parentElement
        const id = divElement.getAttribute('id')

        await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE'
        })
        divElement.remove()
    })
    
    divButtons.appendChild(changeButton)
    divButtons.appendChild(deleteButton)

    return divButtons
}

function populateInputFields(details) {
    [firstInput.value, secondInput.value, thirdInput.value] = details
}


async function getAllRequest() {
    ulListElement.innerHTML = ''
    
    try {
        const promiseResponse = await fetch(baseUrl)
        const allData = await promiseResponse.json()
        
        Object.values(allData)
            .forEach(item => {
                const liElement = createLiItemElement(item)
                ulListElement.appendChild(liElement)
            })
    } catch(err) {console.log(err.message)}
}

function createLiItemElement(item) {
    const liElement = document.createElement('li')
    liElement.className = itemListElementClass
    liElement.setAttribute('id', item._id)

    const divDetailsElement = createDetailsDiv(item)
    const divButtonsElement = createButtonsDiv()

    liElement.appendChild(divDetailsElement)
    liElement.appendChild(divButtonsElement)

    return liElement
}

function createDetailsDiv(item) {
   
    const divElement = document.createElement('div')
    divElement.className = divElementClass
    
    Object.keys(item).forEach(key => {
        const pElement = document.createElement('p')
        pElement.textContent = item[key]
        divElement.appendChild(pElement)
    })

    const pElementLast = divElement.querySelector('p:last-of-type')
    pElementLast.remove()

    return divElement
}

function clearInputFields() {
    firstInput.value = '', 
    secondInput.value = '', 
    thirdInput.value = ''
}