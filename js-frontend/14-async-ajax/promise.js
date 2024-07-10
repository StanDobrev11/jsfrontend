const weddingPromise = new Promise((resolve, reject) => {
    if (Math.random() < 0.3) {
        setTimeout(() => {
            return reject('Engagement broken...\nThat\'s life')
        }, 5000)
        
    }
    
    setTimeout(() => {
        resolve('Just married')
    }, 5000)
})

// console.log(weddingPromise)

weddingPromise
    .then((message) => {
        console.log(message)
    })
    .catch((message) => {
        console.log(message)
    })
    // always executed
    .finally(() => {
        console.log('Love always wins')
    })

// always rejecting promise -> no need to write top code:
const rejectingPromise = Promise.reject('This is rejection always promise')
console.log(rejectingPromise)
rejectingPromise.catch((message) => {console.log(message)})

