function attachEventsListeners() {

    const daysInputElement = document.getElementById('days')
    const hoursInputElement = document.getElementById('hours')
    const minutesInputElement = document.getElementById('minutes')
    const secondsInputElement = document.getElementById('seconds')
    
    const daysButtonElement = document.getElementById('daysBtn')
    daysButtonElement.addEventListener('click', convertFromDays)

    const hoursButtonElement = document.getElementById('hoursBtn')
    hoursButtonElement.addEventListener('click', convertFromHours)
    
    const minutesButtonElement = document.getElementById('minutesBtn')
    minutesButtonElement.addEventListener('click', convertFromMinutes)

    const secondsButtonElement = document.getElementById('secondsBtn')
    secondsButtonElement.addEventListener('click', convertFromSeconds)

    function convertFromDays() {
        const days = Number(daysInputElement.value)
        hoursInputElement.value = days * 24
        minutesInputElement.value = days * 1440
        secondsInputElement.value = days * 86400
    }

    function convertFromHours() {
        const hours = Number(hoursInputElement.value)
        daysInputElement.value = hours / 24
        minutesInputElement.value = hours * 60
        secondsInputElement.value = hours * 3600
    }

    function convertFromMinutes() {
        const minutes = Number(minutesInputElement.value)
        daysInputElement.value = minutes / 1440
        hoursInputElement.value = minutes / 60
        secondsInputElement.value = minutes * 60
    }

    function convertFromSeconds() {
        const seconds = Number(secondsInputElement.value)
        daysInputElement.value = seconds / 86400
        hoursInputElement.value = seconds / 3600
        minutesInputElement.value = seconds / 60
    }
    
}