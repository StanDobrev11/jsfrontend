function solve(onStock, ordered) {  

    const productsOnStock = {}
        

    for (let i = 0; i < onStock.length; i += 2) {
        productsOnStock[onStock[i]] = Number(onStock[i + 1])
    }

    for (let i = 0; i < ordered.length; i += 2) {
        let currentProduct = ordered[i]
        if (productsOnStock[currentProduct]) {
            productsOnStock[currentProduct] += Number(ordered[i + 1])
        } else {
            productsOnStock[ordered[i]] = Number(ordered[i + 1])
        }
    }
    
    for (let product in productsOnStock) {
        console.log(`${product} -> ${productsOnStock[product]}`)
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas', '30'
    ])