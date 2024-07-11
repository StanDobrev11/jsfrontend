// swapi

const url = 'http://swapi.dev/api'

// make fetch to the api
fetch(`${url}/people/1`)
    .then((response) => {
        response.json()
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.log('Wrong')
            })
    })
    .catch(error => {
        console.log('Something went wrong')
    })

// proper way of usage API request
fetch(`${url}/people/4`)
    .then((response) => {
        console.log(Array.from(response.headers))    
        return response.json()
    })
    .then((data) => console.log(data))
    .catch('Wronggg')