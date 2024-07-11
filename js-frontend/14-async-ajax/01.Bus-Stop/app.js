function getInfo() {
    
    const busstationsUrl = 'http://localhost:3030/jsonstore/bus/businfo'
    const submitElement = document.getElementById('stopId')
    const stationId = submitElement.value
    const outputElement = document.getElementById('stopName')
    const ulElement = document.getElementById('buses')
    outputElement.textContent = ''
    const ulElementFragment = document.createDocumentFragment()

    fetch((`${busstationsUrl}/${stationId}`))
        .then(response => response.json())
        .then(data => {
            outputElement.textContent = data['name']
            
            Object.keys(data['buses'])
                .forEach(busNum => {
                    const liElement = document.createElement('li')
                    liElement.textContent = `Bus ${busNum} arrives in ${data['buses'][busNum]} minutes`
                    ulElementFragment.appendChild(liElement)
                })
            
                ulElement.appendChild(ulElementFragment)
            
        })
        .catch(error => outputElement.textContent = 'Error')
  
}   