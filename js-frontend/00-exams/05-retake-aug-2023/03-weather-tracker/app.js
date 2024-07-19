const baseUrl = 'http://localhost:3030/jsonstore/tasks'

// change here
const loadButtonId = 'load-history'
const addButtonId = 'add-weather'
const editButtonId = 'edit-weather'
const firstInputId = 'location'
const secondInputId = 'temperature'
const thirdInputId = 'date'
const itemListElementId = 'list'


// create elements
const divElementClass = 'container'
const divButtonsId = 'buttons-container'
const changeButtonClass = 'change-btn'
const changeButtonText = 'Change'
const deleteButtonClass = 'delete-btn'
const deleteButtonText = 'Delete'

// not here
const loadButton = document.getElementById(loadButtonId)
const addButton = document.getElementById(addButtonId)
const editButton = document.getElementById(editButtonId)

const firstInput = document.getElementById(firstInputId)
const secondInput = document.getElementById(secondInputId)
const thirdInput = document.getElementById(thirdInputId)
const itemListElement = document.getElementById(itemListElementId)


addButton.addEventListener('click', async () => {
    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                location: firstInput.value,
                temperature: secondInput.value,
                date: thirdInput.value
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
                location: firstInput.value,
                temperature: secondInput.value,
                date: thirdInput.value,
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

function clearInputFields() {
    firstInput.value = '', 
    secondInput.value = '', 
    thirdInput.value = ''
}

loadButton.addEventListener('click', getAllRequest)

async function getAllRequest() {
    itemListElement.innerHTML = ''
    
    try {
        const promiseResponse = await fetch(baseUrl)
        const allData = await promiseResponse.json()
        
        Object.values(allData)
            .forEach(item => {
                const divElement = createDivItemElement(item)
                itemListElement.appendChild(divElement)
            })
    } catch(err) {console.log(err.message)}
}

function createInnerHElements(item) {

    const divFragment = document.createDocumentFragment()

    for (let i = 0; i < Object.keys(item).length - 1; i++) {
        if (i === 0) {
            const h2Element = document.createElement('h2')
            h2Element.textContent = item[Object.keys(item)[i]]
            divFragment.appendChild(h2Element)
        } else {
            const h3Element = document.createElement('h3')
            h3Element.textContent = item[Object.keys(item)[i]]
            divFragment.appendChild(h3Element)
        }
    }

    return divFragment

}

function populateInputFields(details) {
    [firstInput.value, secondInput.value, thirdInput.value] = details
}

function createButtonsDiv() {
    const divButtons = document.createElement('div')
    divButtons.setAttribute('id', divButtonsId)

    const changeButton = document.createElement('button')
    changeButton.textContent = changeButtonText
    changeButton.className = changeButtonClass
    changeButton.addEventListener('click', (e) => {
        const divElement = e.target.parentElement.parentElement
        const id = divElement.getAttribute('id')

        const details = []
        details.push(divElement.querySelector('h2').textContent)
        details.push(divElement.querySelector('h3:first-of-type').textContent)
        details.push(divElement.querySelector('h3:last-of-type').textContent)
        // const divContentElement = divElement.querySelector('.content')
        // const details = Array.from(divContentElement.children).map(pEl => pEl.textContent)

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

function createDivItemElement(item) {
    
    const divElement = document.createElement('div')
    divElement.className = divElementClass
    divElement.setAttribute('id', item._id)

    const divDetailsElement = createInnerHElements(item)
    const divButtonsElement = createButtonsDiv()

    divElement.appendChild(divDetailsElement)
    divElement.appendChild(divButtonsElement)

    return divElement
}