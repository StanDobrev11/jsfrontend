function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/phonebook'

    const loadButtonElement = document.getElementById('btnLoad')
    const createButtonElement = document.getElementById('btnCreate')

    const ulElement = document.getElementById('phonebook')

    loadButtonElement.addEventListener('click', () => {
        ulElement.innerHTML = ''
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => {
                Object.values(data)
                    .forEach(entry => {
                        createLiElement(entry)
                    })
            })
            .catch(e => console.log(e.message))
    })

    createButtonElement.addEventListener('click', () => {
        const inputPersonElement = document.getElementById('person')
        const inputPhoneElement = document.getElementById('phone')

        fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                'person': inputPersonElement.value,
                'phone': inputPhoneElement.value
            })
        })
            .then(res => res.json())
            .then(entry => createLiElement(entry))
            .catch(e => console.log(e.message))

        inputPersonElement.value = ''
        inputPhoneElement.value = ''
    })

    function createLiElement(entry) {
        const liElement = document.createElement('li')
        const deleteButtonElement = document.createElement('button')
        deleteButtonElement.classList.add('btnDelete')
        deleteButtonElement.textContent = 'Delete'
        liElement.textContent = `${entry.person}: ${entry.phone}`
        liElement.appendChild(deleteButtonElement)
        ulElement.appendChild(liElement)

        deleteButtonElement.addEventListener('click', () => {
            fetch(`${baseUrl}/${entry._id}`, {
                method: 'DELETE'
            })
                .catch(e => console.log(e.message))

            liElement.remove()
        })
    }

}

attachEvents();