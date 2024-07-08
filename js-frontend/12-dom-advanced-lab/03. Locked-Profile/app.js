function lockedProfile() {
    // button event delegation
    const mainElement = document.getElementById('main')
    mainElement.addEventListener('click', (e) => {
        
        if (e.target.tagName === 'BUTTON') {
            const currentProfileElement = e.target.parentElement
            const userHiddenElement = currentProfileElement.querySelector('div')
            const unlockRadioElement = currentProfileElement.querySelector('input[type=radio][value=unlock]')

            if (unlockRadioElement.checked) {
                console.log(e.target.textContent)  
                if (e.target.textContent === 'Show more') {
                    userHiddenElement.style.display = 'block'
                    e.target.textContent = 'Hide it' 
                } else {
                    userHiddenElement.style.display = 'none'
                    e.target.textContent = 'Show more'
                }
            }
        }
    })
}