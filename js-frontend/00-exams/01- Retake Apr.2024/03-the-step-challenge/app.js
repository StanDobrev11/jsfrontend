const baseUrl = 'http://localhost:3030/jsonstore/records'

const addRecordButton = document.getElementById('add-record')
const editRecordButton = document.getElementById('edit-record')
const buttonLoad = document.getElementById('load-records')
const ulListData = document.getElementById('list')

const pnameInput = document.getElementById('p-name')
const stepsInput = document.getElementById('steps')
const caloriesInput = document.getElementById('calories')

editRecordButton.addEventListener('click', async () => {

    const pName = pnameInput.value
    const pSteps = stepsInput.value
    const pCalories = caloriesInput.value
    const id = editRecordButton.value

    try {
        await fetch(`${baseUrl}/${editRecordButton.value}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: pName,
                steps: pSteps,
                calories: pCalories,
                _id: id
            })
        })

        
        const buttonElement = document.querySelector(`button[value="${id}"]`)
        
        const liRecord = buttonElement.parentElement.parentElement
        liRecord.innerHTML = ''

        const divInfo = createDivInfoElement(pName, pSteps, pCalories)
        const divButtons = createButtonsDiv(id)
        liRecord.appendChild(divInfo)
        liRecord.appendChild(divButtons)

        addRecordButton.removeAttribute('disabled')
        editRecordButton.value = ''
        editRecordButton.setAttribute('disabled', '')

        pnameInput.value = ''
        stepsInput.value = ''
        caloriesInput.value = ''

    } catch (err) { console.log(err.message) }
  
})

addRecordButton.addEventListener('click', async () => {

    const pName = pnameInput.value
    const psteps = stepsInput.value
    const pCalories = caloriesInput.value

    try {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: pName,
                steps: psteps,
                calories: pCalories
            })
        })

        const pData = await res.json()
        addRecord(pName, psteps, pCalories, pData['_id'])

    } catch (err) { console.log(err.message) }

    pnameInput.value = ''
    stepsInput.value = ''
    caloriesInput.value = ''

})

buttonLoad.addEventListener('click', loadAllData)

async function loadAllData() {
    ulListData.innerHTML = ''

    try {
        const promiseResponse = await fetch(baseUrl)
        const competitorsData = await promiseResponse.json()

        Object.values(competitorsData)
            .forEach(({ name, steps, calories, _id }) => {
                addRecord(name, steps, calories, _id)
            })

    } catch (err) { console.log(err.message) }
}

async function loadPlayerData(playerId) {
    try {
        const promiseRes = await fetch(`${baseUrl}/${playerId}`)
        const playerData = await promiseRes.json()
        return playerData
    } catch (err) { console.log(err.message) }

}   

function createButtonsDiv(id) {
    const buttonChange = document.createElement('button')
    buttonChange.textContent = 'Change'
    buttonChange.className = 'change-btn'
    buttonChange.value = id

    buttonChange.addEventListener('click', async () => {

        const playerId = buttonChange.value
        // const playerData = await loadPlayerData(playerId)
        const playerRecords = document.getElementById(id)
        const playerInfo = playerRecords.querySelector('div .info')
        const [pName, pSteps, pCalories] = Array.from(playerInfo.children)
        
        pnameInput.value = pName.textContent
        stepsInput.value = pSteps.textContent
        caloriesInput.value = pCalories.textContent

        // pnameInput.value = playerData.name
        // stepsInput.value = playerData.steps
        // caloriesInput.value = playerData.calories

       
        editRecordButton.removeAttribute('disabled')
        editRecordButton.value = id
        addRecordButton.setAttribute('disabled', '')
        
    })


    const buttonDelete = document.createElement('button')
    buttonDelete.textContent = 'Delete'
    buttonDelete.className = 'delete-btn'
    buttonDelete.value = id

    buttonDelete.addEventListener('click', async () => {
        await fetch(`${baseUrl}/${buttonDelete.value}`, {
            method: 'DELETE'
        })
        buttonDelete.parentElement.parentElement.remove()
    })

    const divButtons = document.createElement('div')
    divButtons.className = 'btn-wrapper'
    divButtons.appendChild(buttonChange)
    divButtons.appendChild(buttonDelete)

    return divButtons
}

function createDivInfoElement(name, steps, calories) {
    const pName = document.createElement('p')
    const pSteps = document.createElement('p')
    const pCalories = document.createElement('p')

    pName.textContent = name
    pSteps.textContent = steps
    pCalories.textContent = calories

    const divInfo = document.createElement('div')
    divInfo.className = 'info'
    divInfo.appendChild(pName)
    divInfo.appendChild(pSteps)
    divInfo.appendChild(pCalories)

    return divInfo
}


function addRecord(name, steps, calories, id) {

    const divInfo = createDivInfoElement(name, steps, calories)

    const divButtons = createButtonsDiv(id)

    const liRecord = document.createElement('li')
    liRecord.className = 'record'
    liRecord.setAttribute('id', id)
    liRecord.appendChild(divInfo)
    liRecord.appendChild(divButtons)

    ulListData.appendChild(liRecord)
}