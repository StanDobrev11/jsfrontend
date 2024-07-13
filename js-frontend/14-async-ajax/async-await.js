// Normal function that return Promise
function calcMeaningOfLife() {
    
    const resultPromise = new Promise((resolve, reject) => {
        if (Math.random() < 0.5) {
            throw new Error('Failed to calculate')
        }
        
        setTimeout(() => {
            resolve(42)
        }, 1000)
    })
    
    return resultPromise
}

calcMeaningOfLife()
    .then(data => console.log(data))
    .catch(e => console.log(e))


// Async function
async function solve() {
    
    try {
        const meaningOfLife = await calcMeaningOfLife()
        console.log(meaningOfLife)
    } catch (err) {
        console.log(err.message)
    }
    
}

solve()

// async func expression
// const solve = async function() {
// }

// async arrow func
// const solve = async () => {
// }