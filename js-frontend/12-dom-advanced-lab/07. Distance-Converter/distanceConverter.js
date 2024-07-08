function attachEventsListeners() {
    const inputValueElement = document.getElementById('inputDistance')
    const inputUnitsElement = document.getElementById('inputUnits')
    const inputButtonElement = document.getElementById('convert')

    const outputElement = document.getElementById('outputDistance')
    const outputUnitsElement = document.getElementById('outputUnits')
    
    const distanceMapper = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254,
    }
    

    inputButtonElement.addEventListener('click', () => {
        const inputDistance = Number(inputValueElement.value)
        const inMeters = distanceMapper[inputUnitsElement.value] * inputDistance
        const inTargetUnits = inMeters / distanceMapper[outputUnitsElement.value]
        outputElement.value = inTargetUnits
    })
}