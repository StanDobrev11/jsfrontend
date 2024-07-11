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

// multiple parallel promises
const createTimeoutPromise = function timeoutPromise(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message)
        }, time) 
    })
}

// Promise.allSettled
const groupPromise = Promise.all([
    Promise.resolve('First promise'),
    createTimeoutPromise('second promise', 3000),
    createTimeoutPromise('third promise', 1000)
])

groupPromise.then((values) => {
    console.log(values)
})