function solve() {
    
    const outputElement = document.querySelector('#info .info')
    const departButtoneElement = document.querySelector('#depart')
    const arriveButtonElement = document.querySelector('#arrive')
    const busStationDomain = 'http://localhost:3030/jsonstore/bus/schedule'
    let busStationUri = ''
    
    function depart() {
        if (!busStationUri) {
            busStationUri = 'depot'
        }
         
        fetch(`${busStationDomain}/${busStationUri}`)
            .then(result => result.json())
            .then(data => {
                outputElement.textContent = `Next stop ${data.name}`
                departButtoneElement.setAttribute('disabled', true)
                arriveButtonElement.removeAttribute('disabled')
            })
            .catch(e => {
                outputElement.textContent = 'Error'
                departButtoneElement.setAttribute('disabled', true)
                arriveButtonElement.setAttribute('disabled', true)
                console.log(e)
            })

    }

    async function arrive() {
        fetch(`${busStationDomain}/${busStationUri}`)
            .then(result => result.json())
            .then(data => {
                outputElement.textContent = `Arriving at ${data.name}`
                arriveButtonElement.setAttribute('disabled', true)
                departButtoneElement.removeAttribute('disabled')
                busStationUri = data.next
            })
            .catch(e => {
                outputElement.textContent = 'Error'
                departButtoneElement.setAttribute('disabled', true)
                arriveButtonElement.setAttribute('disabled', true)
                console.log(e)
            })
    }

    return {
        depart,
        arrive
    };
}

let result = solve();