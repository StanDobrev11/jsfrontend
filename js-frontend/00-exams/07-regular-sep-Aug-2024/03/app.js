const baseUrl = 'http://localhost:3030/jsonstore/appointments'

const loadButtonId = 'load-appointments'
const addButtonId = 'add-appointment'
const editButtonId = 'edit-appointment'
const firstInputId = 'car-model'
const secondInputId = 'car-service'
const thirdInputId = 'date'

const divElementClass = 'info'
const divButtonsId = 'buttons-appointment'
const changeButtonClass = 'change-btn'
const changeButtonText = 'Change'
const deleteButtonClass = 'delete-btn'
const deleteButtonText = 'Delete'
const itemListElementClass = 'appointment'

const loadButton = document.getElementById(loadButtonId)
const addButton = document.getElementById(addButtonId)
const editButton = document.getElementById(editButtonId)

const firstInput = document.getElementById(firstInputId)
const secondInput = document.getElementById(secondInputId)
const thirdInput = document.getElementById(thirdInputId)
const ulListElement = document.getElementById('appointments-list')


addButton.addEventListener('click', async () => {
    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                model: firstInput.value,
                service: secondInput.value,
                date: thirdInput.value,
            })
        });

        getAllRequest();
        clearInputFields();

    } catch (error) {
        console.error(error);
    }
});


loadButton.addEventListener('click', getAllRequest)

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
   
    const divElement = document.createDocumentFragment()

    let count = 0
    Object.keys(item).forEach(key => {
        if (count === 0) {
            const hElement = document.createElement('h2')
            hElement.textContent = item[key]
            divElement.appendChild(hElement)
            count += 1
        } else {
            const hElement = document.createElement('h3')
            hElement.textContent = item[key]
            divElement.appendChild(hElement)
            count += 1
        }
        
    })

    const hElementLast = divElement.querySelector('h3:last-of-type')
    hElementLast.remove()

    return divElement
}


function clearInputFields() {
    firstInput.value = '', 
    secondInput.value = '', 
    thirdInput.value = ''
}

editButton.addEventListener('click', async () => {
    
    const id = editButton.value
    try {
        await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                model: firstInput.value,
                service: secondInput.value,
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

function createButtonsDiv() {
    const divButtons = document.createElement('div')
    divButtons.setAttribute('id', divButtonsId)

    const changeButton = document.createElement('button')
    changeButton.textContent = changeButtonText
    changeButton.className = changeButtonClass
    changeButton.addEventListener('click', (e) => {
        const liElement = e.target.parentElement.parentElement
        const id = liElement.getAttribute('id')
        const details = Array.from(liElement.children).map(pEl => pEl.textContent)
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