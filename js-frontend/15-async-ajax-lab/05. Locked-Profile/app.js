function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles'

    const mainElement = document.getElementById('main')
    const divProfileElement = document.querySelector('div .profile')
    
    document.addEventListener('DOMContentLoaded', () => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data =>
                Object.values(data)
                    .forEach(({ username, email, age }) => {
                        const userProfileElement = divProfileElement.cloneNode(true)
                        const userNameElement = userProfileElement.querySelector('input[name=user1Username')
                        const userEmailElement = userProfileElement.querySelector('input[name=user1Email')
                        const userAgeElement = userProfileElement.querySelector('input[name=user1Age')

                        const radioLockElement = userProfileElement.querySelector('input[value=lock]')
                        const radioUnlockElement = userProfileElement.querySelector('input[value=unlock]')

                        const divHiddenInfoElement = userProfileElement.querySelector('div')
                        divHiddenInfoElement.style.display = 'none'
                        // divHiddenInfoElement.className = username
                        // divHiddenInfoElement.classList.add('hiddenInfo')

                        userNameElement.value = username
                        userEmailElement.value = email
                        userAgeElement.value = age
                        userAgeElement.setAttribute('type', 'email')
                        radioLockElement.setAttribute('name', username)
                        radioUnlockElement.setAttribute('name', username)

                        mainElement.appendChild(userProfileElement)

                        const buttonElement = userProfileElement.querySelector('button')
                        buttonElement.addEventListener('click', () => {
                            if (radioUnlockElement.checked) {
                                if (buttonElement.textContent === 'Show more') {
                                    buttonElement.textContent = 'Hide it'
                                    divHiddenInfoElement.style.display = 'block'
                                    // divHiddenInfoElement.classList.remove('hiddenInfo')
                                } else {
                                    buttonElement.textContent = 'Show more'
                                    divHiddenInfoElement.style.display = 'none'
                                    // divHiddenInfoElement.classList.add('hiddenInfo')
                                }
                            }
                        })
                    })
            )
            .catch(e => console.log(e))
        divProfileElement.remove()
    })
}