function solve(array) {

    const goldExchangeRate = 67.51   
    const bitcoinExchangeRate = 11949.16

    let bitcoin = 0
    let cashe = 0
    let goldMined = 0
    let count = 1
    let dayOfBitcoin = 0
    let possibleToBuy = 0

    array.forEach(element => {
        goldMined = element
        if (count % 3 === 0) {
            goldMined -= element * 0.3
        }
        cashe += goldMined * goldExchangeRate
        if (cashe >= bitcoinExchangeRate) {
            possibleToBuy = Math.floor(cashe / bitcoinExchangeRate)
            bitcoin += possibleToBuy
            cashe -= possibleToBuy * bitcoinExchangeRate
            if (dayOfBitcoin === 0) {
                dayOfBitcoin = count
            }
        }
        count += 1
    });

    console.log(`Bought bitcoins: ${bitcoin}`)
    if (dayOfBitcoin !== 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfBitcoin}`)
}
    console.log(`Left money: ${cashe.toFixed(2)} lv.`)

}


// solve([100, 200, 300])
// solve([50, 100])
solve([3124.15, 504.212, 2511.124])