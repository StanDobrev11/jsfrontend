function attachEvents() {
    const authorInputElement = document.querySelector('input[name=author]')
    const titleInputElement = document.querySelector('input[name=title]')
    const submitButtonElement = document.querySelector('#form button')
    const tbodyElement = document.querySelector('tbody')

    // create event listner
    submitButtonElement.addEventListener('click', () => {
        // create action buttons
        const buttonsNames = ['Edit', 'Delete']
        const tdElementButtons = document.createElement('td')

        buttonsNames.forEach(name => {
            const buttonElement = document.createElement('button')
            buttonElement.textContent = name
            tdElementButtons.appendChild(buttonElement)
        })

        // create elements for author and title
        const trElement = document.createElement('tr')
        const authorTitleList = [titleInputElement.value, authorInputElement.value]

        authorTitleList.forEach(content => {
            const tdElement = document.createElement('td')
            tdElement.textContent = content
            trElement.appendChild(tdElement)
        })

        // append buttons, author, title
        trElement.appendChild(tdElementButtons)
        tbodyElement.appendChild(trElement)

        authorInputElement.value = ''
        titleInputElement.value = ''

    })

}

attachEvents();