const baseUrl = 'http://localhost:3030/jsonstore/games'

const loadButton = document.getElementById('load-games')
const addButton = document.getElementById('add-game')
const editButton = document.getElementById('edit-game')
const gameListElement = document.getElementById('games-list')

const nameInput = document.getElementById('g-name')
const typeInput = document.getElementById('type')
const playersInput = document.getElementById('players')

addButton.addEventListener('click', async () => {
    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name: nameInput.value,
                type: typeInput.value,
                players: playersInput.value
            })
        });

        getAllRequest();
        clearInputFields();

    } catch (error) {
        console.error(error);
    }
});

// addButton.addEventListener('click', () => {
//     fetch(baseUrl, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json'
//         },
//         body: JSON.stringify({
//             name: nameInput.value,
//             type: typeInput.value,
//             players: playersInput.value
//         })
//     })
    
//     getAllRequest()
//     clearInputFields()

// })

editButton.addEventListener('click', async () => {
    
    const gameId = editButton.value

    await fetch(`${baseUrl}/${gameId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            name: nameInput.value,
            type: typeInput.value,
            players: playersInput.value,
            _id: gameId
        })
    })

    getAllRequest()
    clearInputFields()

    addButton.removeAttribute('disabled')
    editButton.value = ''
    editButton.setAttribute('disabled', '')

})

loadButton.addEventListener('click', getAllRequest)


function populateInputFields([name, type, players]) {
    nameInput.value = name
    typeInput.value = type
    playersInput.value = players
}

function clearInputFields() {
    nameInput.value = ''
    typeInput.value = ''
    playersInput.value = ''
}

function getAllRequest() {
    gameListElement.innerHTML = ''
    
    fetch(baseUrl)
        .then(res => res.json())
        .then(gamesData => {
            Object.values(gamesData)
                .forEach(game => {
                    const divElement = createDivGameElement(game)
                    gameListElement.appendChild(divElement)
                })
        })
        .catch(e => console.log(e.message))     
}

function createDivGameElement(game) {
    
    const divElement = document.createElement('div')
    divElement.className = 'board-game'
    divElement.setAttribute('id', game._id)

    const divDetailsElement = createDetailsDiv(game)
    const divButtonsElement = createButtonsDiv()

    divElement.appendChild(divDetailsElement)
    divElement.appendChild(divButtonsElement)

    return divElement
}

function createButtonsDiv() {
    const divButtons = document.createElement('div')
    divButtons.className = 'buttons-container'

    const changeButton = document.createElement('button')
    changeButton.textContent = 'Change'
    changeButton.className = 'change-btn'
    changeButton.addEventListener('click', (e) => {
        const divGameElement = e.target.parentElement.parentElement
        const gameId = divGameElement.getAttribute('id')

        const divContentElement = divGameElement.querySelector('.content')
        const details = Array.from(divContentElement.children).map(pEl => pEl.textContent)

        populateInputFields(details)
      
        editButton.removeAttribute('disabled')
        editButton.value = gameId
        addButton.setAttribute('disabled', '')

    })

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.className = 'delete-btn'

    deleteButton.addEventListener('click', async (e) => {
        const divGameElement = e.target.parentElement.parentElement
        const gameId = divGameElement.getAttribute('id')

        await fetch(`${baseUrl}/${gameId}`, {
            method: 'DELETE'
        })
        divGameElement.remove()
    })
    
    divButtons.appendChild(changeButton)
    divButtons.appendChild(deleteButton)

    return divButtons
}

function createDetailsDiv(game) {
    const divElement = document.createElement('div')
    divElement.className = 'content'

    const pNameElement = document.createElement('p')
    pNameElement.textContent = game.name
    divElement.appendChild(pNameElement)

    const pTypeELement = document.createElement('p')
    pTypeELement.textContent = game.type
    divElement.appendChild(pTypeELement)

    const pPlayersELement = document.createElement('p')
    pPlayersELement.textContent = game.players
    divElement.appendChild(pPlayersELement)

    return divElement
}