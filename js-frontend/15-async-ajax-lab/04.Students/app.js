function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/collections/students'

    const tbodyElement = document.querySelector('tbody')
    const submitButtonElement = document.getElementById('submit')

    const divInputElement = document.querySelector('div .inputs')

    const firstNameElement = document.querySelector('input[name=firstName]')
    const lastNameElement = document.querySelector('input[name=lastName]')
    const facultyNumElement = document.querySelector('input[name=facultyNumber]')
    const gradeElement = document.querySelector('input[name=grade]')


    submitButtonElement.addEventListener('click', async () => {

        const firstName = firstNameElement.value
        const lastName = lastNameElement.value
        const facultyNumber = facultyNumElement.value
        const grade = gradeElement.value

        try {
            const resEntry = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    'firstName': firstName,
                    'lastName': lastName,
                    'facultyNumber': facultyNumber,
                    'grade': grade
                })
            })

            const entry = await resEntry.json()
            createEntry(entry)
        } catch (err) { console.log(err.message) }

        for (const inputElement of divInputElement.children) {
            inputElement.value = ''
        }

    })

    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const resultStudents = await fetch(baseUrl)
            const studentsData = await resultStudents.json()

            Object.values(studentsData)
                .forEach(entry => {
                    createEntry(entry)
                })

        } catch (err) { console.log(err.message) }

    })

    function createEntry(entry) {
        const trElement = document.createElement('tr')

        const firstNameTd = document.createElement('td')
        firstNameTd.textContent = entry.firstName
        trElement.appendChild(firstNameTd)

        const lastNameTd = document.createElement('td')
        lastNameTd.textContent = entry.lastName
        trElement.appendChild(lastNameTd)

        const facultyTd = document.createElement('td')
        facultyTd.textContent = entry.facultyNumber
        trElement.appendChild(facultyTd)

        const gradeTd = document.createElement('td')
        gradeTd.textContent = entry.grade
        trElement.appendChild(gradeTd)

        tbodyElement.appendChild(trElement)
    }

}

attachEvents();