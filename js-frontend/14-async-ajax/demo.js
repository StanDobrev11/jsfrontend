// // Async with callback

// console.log('start')
// setTimeout(() => {
//     console.log('sync')
// }, 2000)
// // delayStart(() => console.log('delayed start in 2secs'), 2000)
// console.log('finish')

// function delayStart(callback, time) {
//     setTimeout(() => {
//         callback();
//     }, time);
// }


let start = Date.now()
console.log('start')
asyncCount(countTo, 1000)
let finish = Date.now()
console.log('finish')
console.log(`Total elapsed: ${finish - start}`)

function asyncCount(callback, target) {
    setTimeout(() => callback(target), 0)
}

function countTo(target) {
    const start = Date.now()
    for (let i = 1; i < target; i++) {
        if (i === target){
            console.log('finish')
        }

        console.log(i)
    }
    const finish = Date.now()
    console.log(`Elapsed: ${finish - start}`)

}


