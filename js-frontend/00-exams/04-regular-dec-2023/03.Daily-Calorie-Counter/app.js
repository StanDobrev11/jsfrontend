const baseUrl = 'http://localhost:3030/jsonstore/tasks'

const divMealList = document.getElementById('list')
const inputFood = document.getElementById('food')
const inputTime = document.getElementById('time')
const inputCals = document.getElementById('calories')

const loadButton = document.getElementById('load-meals')
const addButton = document.getElementById('add-meal')
const editButton = document.getElementById('edit-meal')

editButton.addEventListener('click', () => {
    const mealId = editButton.value

    fetch(`${baseUrl}/${mealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            food: inputFood.value,
            time: inputTime.value,
            calories: inputCals.value,
            _id: mealId
        })

    })
    .then(() => {return getAlldata()})
    .then(() => clearInputFields())
    .then(() => {
        editButton.setAttribute('disabled', '')
        editButton.value = ''
        addButton.removeAttribute('disabled')
    })
    .catch(e => console.log(e))
})

loadButton.addEventListener('click', getAlldata)

addButton.addEventListener('click', () => {

    fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            food: inputFood.value, 
            time: inputTime.value,
            calories: inputCals.value
        }),
        
    })
    .then(() => {return getAlldata()})
    .then(() => clearInputFields())
    .catch(e => console.log(e.message))
        
})

function clearInputFields() {
    inputFood.value = ''
    inputTime.value = ''
    inputCals.value = ''
}

function populateInputFields([food, time, cals]) {
    inputFood.value = food
    inputTime.value = time
    inputCals.value = cals
}

function createButtonsDiv() {
    const divElement = document.createElement('div')
    divElement.className = 'meal-buttons'

    const changeButton = document.createElement('button')
    changeButton.className = 'change-meal'
    changeButton.textContent = 'Change'
    changeButton.addEventListener('click', (e) => {
        const mealDiv = e.target.parentElement.parentElement
        const mealDetails = Array.from(mealDiv.children).map(el => el.textContent)

        populateInputFields(mealDetails)
        editButton.value = mealDiv.getAttribute('id')
        editButton.removeAttribute('disabled')
        addButton.setAttribute('disabled', '')
    })

    const deleteButton = document.createElement('button')
    deleteButton.className = 'delete-meal'
    deleteButton.textContent = 'Delete'
    deleteButton.addEventListener('click', (e) => {
        const mealDiv = e.target.parentElement.parentElement
        const mealId = mealDiv.getAttribute('id')
        
        fetch(`${baseUrl}/${mealId}`, {
            method: 'DELETE',
        })
        .then(() => mealDiv.remove())
        .catch(e => console.log(e))
    })


    divElement.appendChild(changeButton)
    divElement.appendChild(deleteButton)

    return divElement
}

function getAlldata() {
    divMealList.innerHTML = ''
    
    fetch(baseUrl)
        .then(res => res.json())
        .then(allMeals => {
            Object.values(allMeals)
                .forEach(meal => addMealToList(meal))
        })
        .catch(e => console.log(e.message))
}

function addMealToList(meal) {
    divMealList.appendChild(createMealDiv(meal))
}

function createMealDiv(meal) {
    const divElement = document.createElement('div')
    divElement.className = 'meal'
    divElement.setAttribute('id', meal._id)

    const h2Element = document.createElement('h2')
    h2Element.textContent = meal.food

    const h3TimeElement = document.createElement('h3')
    h3TimeElement.textContent = meal.time

    const h3CalElement = document.createElement('h3')
    h3CalElement.textContent = meal.calories

    divElement.appendChild(h2Element)
    divElement.appendChild(h3TimeElement)
    divElement.appendChild(h3CalElement)
    divElement.appendChild(createButtonsDiv())

    return divElement
}

