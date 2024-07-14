window.addEventListener("load", solve);

function solve() {

    const inputButton = document.getElementById('add-btn')

    const nameInput = document.getElementById('name')
    const phoneInput = document.getElementById('phone')
    const categoryElement = document.getElementById('category')

    const ulCheckElement = document.getElementById('check-list')
    const ulDoneElement = document.getElementById('contact-list')

    inputButton.addEventListener('click', () => {
        const currentCategory = categoryElement.querySelector('option:checked')

        if (checkValidInput()) {
            const liRecordElement = createLiRecordElement([nameInput.value, phoneInput.value, currentCategory.value])
            ulCheckElement.appendChild(liRecordElement)
            clearInputFields()
        }

    })

    function clearInputFields() {
        nameInput.value = ''
        phoneInput.value = ''
        categoryElement.selectedIndex = 0
    }

    function populateInputFields([name, phone, category]) {
        nameInput.value = name
        phoneInput.value = phone
        const currentCategoryIndex = document.querySelector(`option[value=${category}]`).index
        categoryElement.selectedIndex = currentCategoryIndex
    }

    function createButtonsDiv() {
        const divButtons = document.createElement('div')
        divButtons.className = 'buttons'

        const editButton = document.createElement('button')
        editButton.textContent = 'Edit'
        editButton.className = 'edit-btn'
        editButton.addEventListener('click', (e) => {
            const liElement = e.target.parentElement.parentElement
            const articleElement = liElement.querySelector('article')
            const details = Array.from(articleElement.children).map(pEl => pEl.textContent.split(':')[1])

            populateInputFields(details)
            liElement.remove()
        })


        const saveButton = document.createElement('button')
        saveButton.textContent = 'Save'
        saveButton.className = 'save-btn'
        saveButton.addEventListener('click', (e) => {
            const liElement = e.target.parentElement.parentElement
            const divButtons = e.target.parentElement
            divButtons.remove()

            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            deleteButton.className = 'del-btn'
            deleteButton.addEventListener('click', (e) => {
                const liElement = e.target.parentElement
                liElement.remove()
            })

            liElement.appendChild(deleteButton)
            ulDoneElement.appendChild(liElement)
        })

        divButtons.appendChild(editButton)
        divButtons.appendChild(saveButton)

        return divButtons
    }

    function createDetailsArticle([name, phone, category]) {
        const articleElement = document.createElement('article')

        const pNameElement = document.createElement('p')
        pNameElement.textContent = `name:${name}`
        articleElement.appendChild(pNameElement)

        const pPhoneELement = document.createElement('p')
        pPhoneELement.textContent = `phone:${phone}`
        articleElement.appendChild(pPhoneELement)

        const pCatELement = document.createElement('p')
        pCatELement.textContent = `category:${category}`
        articleElement.appendChild(pCatELement)

        return articleElement
    }

    function createLiRecordElement(details) {

        const liElement = document.createElement('li')

        const articleElement = createDetailsArticle(details)
        const divButtonsElement = createButtonsDiv()

        liElement.appendChild(articleElement)
        liElement.appendChild(divButtonsElement)

        return liElement
    }

    function checkValidInput() {
        if (nameInput.value !== '' && phoneInput.value !== '' && categoryElement.selectedIndex !== 0) {
            return true
        }
        return false
    }

}
