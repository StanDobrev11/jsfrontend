const serverDomain = 'http://localhost:3030/'
const resourceUri = 'jsonstore/books/'

const getButtonElement = document.getElementById('get-all')
const getSpecificButtonElement = document.getElementById('get-specific')
const postButtonElement = document.getElementById('post')
const putButtonElement = document.getElementById('put')
// const patchButtonElement = document.getElementById('patch')
const deleteButtonElement = document.getElementById('delete')
const outputElement = document.getElementById('output')
const inputElement = document.getElementById('input')

let booksUrl = serverDomain + resourceUri

// get all request
getButtonElement.addEventListener('click', () =>{
    outputElement.textContent = ''

    fetch(`${booksUrl}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            outputElement.textContent = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
})



// get specific item request
getSpecificButtonElement.addEventListener('click', () => {
    const targetBookId = inputElement.value
    outputElement.textContent = ''
    
    fetch(`${booksUrl}${targetBookId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            outputElement.textContent = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
})



// post request
postButtonElement.addEventListener('click', () =>{
    const inputData = JSON.parse(inputElement.value)
    outputElement.textContent = ''

    fetch(booksUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(inputData)
    }) 
        .then(response => response.json())
        .then(data => {
            outputElement.textContent = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
})


// put request
putButtonElement.addEventListener('click', () => {
    const inputData = inputElement.value.split('\n')
    const targetBookId = inputData.shift().trim()
    const editedData = inputData.join('\n')
    outputElement.textContent = ''

    fetch(`${booksUrl}${targetBookId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: editedData
    })
        .then(response => response.json())
        .then(data => {
            outputElement.textContent = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
})

// delete request
deleteButtonElement.addEventListener('click', () =>{
    const targetBookId = inputElement.value
    outputElement.textContent = ''

    fetch(`${booksUrl}${targetBookId}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            outputElement.textContent = JSON.stringify(data, null, 2)
        })
        .catch(error => console.log(error))
})