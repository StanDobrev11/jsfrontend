const countElement = document.getElementById('count')
const resetElement = document.getElementById('reset')

// third BEST way DOM event handler
const eventListner = (event) => {
    countElement.textContent = 0
    console.log('event is taken now and ... ')
}

resetElement.addEventListener('click', eventListner)


// second way DOM element props
const decrementElement = document.getElementById('decrement')
decrementElement.onclick = () => {
    countElement.textContent = Number(countElement.textContent) - 1
}   

// event usting HMTL attribute -> first way -> avoid
function onIncrement(event) {
    const countElement = document.getElementById('count')

    countElement.textContent = Number(countElement.textContent) + 1
    console.dir(event)
}

// removing event listners, there must be reference to the function
setTimeout(() => {
    resetElement.removeEventListener('click', eventListner)
}, 10000); 


const inputNumberElement = document.getElementById('number')
// const setNumberElement = document.getElementById('set-number')
inputNumberElement.addEventListener('input', (event) => {
    countElement.textContent = event.target.value
})