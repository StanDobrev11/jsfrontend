const baseUrl = 'http://localhost:3030/jsonstore/gifts'

const loadButton = document.getElementById('load-presents')
const addButton = document.getElementById('add-present')
const editButton = document.getElementById('edit-present')

const firstInput = document.getElementById('gift')
const secondInput = document.getElementById('for')
const thirdInput = document.getElementById('price')
const itemListElement = document.getElementById('gift-list')

function clearInputFields() {
    firstInput.value = '', 
    secondInput.value = '', 
    thirdInput.value = ''
}

function populateInputFields(details) {
    [firstInput.value, secondInput.value, thirdInput.value] = details
}

function createButtonsDiv() {
    const divButtons = document.createElement('div')
    divButtons.className = 'buttons-container'

    const changeButton = document.createElement('button')
    changeButton.textContent = 'Change'
    changeButton.className = 'change-btn'
    changeButton.addEventListener('click', (e) => {
        const divElement = e.target.parentElement.parentElement
        const id = divElement.getAttribute('id')

        const divContentElement = divElement.querySelector('.content')
        const details = Array.from(divContentElement.children).map(pEl => pEl.textContent)

        populateInputFields(details)
      
        editButton.removeAttribute('disabled')
        editButton.value = id
        addButton.setAttribute('disabled', '')

    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'delete-btn'

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

function createDetailsDiv(item) {
   
    const divElement = document.createElement('div')
    divElement.className = 'content'
    
    Object.keys(item).forEach(key => {
        const pElement = document.createElement('p')
        pElement.textContent = item[key]
        divElement.appendChild(pElement)
    })

    const pElementLast = divElement.querySelector('p:last-of-type')
    pElementLast.remove()

    return divElement
}

function createDivItemElement(item) {
    
    const divElement = document.createElement('div')
    divElement.className = 'gift-sock'
    divElement.setAttribute('id', item._id)

    const divDetailsElement = createDetailsDiv(item)
    const divButtonsElement = createButtonsDiv()

    divElement.appendChild(divDetailsElement)
    divElement.appendChild(divButtonsElement)

    return divElement
}

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

loadButton.addEventListener('click', getAllRequest)


addButton.addEventListener('click', async () => {
    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                gift: firstInput.value,
                for: secondInput.value,
                price: thirdInput.value
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
                gift: firstInput.value,
                for: secondInput.value,
                price: thirdInput.value,
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