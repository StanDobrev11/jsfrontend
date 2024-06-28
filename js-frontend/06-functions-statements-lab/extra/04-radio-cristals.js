function solve(args) {
    
    const targetThicknes = args.shift()

    const mapper = [
        {operation: (x) => x / 4, count: 0, name: 'Cut'},
        {operation: (x) => x * 0.8, count: 0, name: 'Lap'},
        {operation: (x) => x - 20, count: 0, name: 'Grind'},
        {operation: (x) => x - 2, count: 0, name: 'Etch'},
        {operation: (x) => x + 1, count: 0, name: 'X-ray'},
        {operation: (x) => x + 1, count: 0, name: 'Transporting and washing'},
    ]

    args.forEach(element => {
        console.log(`Processing chunk ${element} microns`)
        
        let i = 0
        let count = 0
        while (element > targetThicknes) {    
            let expectedThicknes = mapper[i].operation(element)
            
            if (expectedThicknes === targetThicknes || (expectedThicknes - targetThicknes < 1 && expectedThicknes - targetThicknes > 0)) {
                element = expectedThicknes
                count += 1
                console.log(`${mapper[i].name} x${count}`)
                console.log("Transporting and washing")
                element = Math.floor(element)
                console.log(`Finished crystal ${element} microns`)
                break
            }
            
            if (targetThicknes - expectedThicknes === 1) {
                element = expectedThicknes
                count += 1
                console.log(`${mapper[i].name} x${count}`)
                console.log("Transporting and washing")
                element = Math.floor(element)
                element = mapper[4].operation(element)
                console.log(`${mapper[4].name} x1`)
                console.log(`Finished crystal ${element} microns`)
                break
            }
            
            if (expectedThicknes > targetThicknes) {
                element = expectedThicknes
                count += 1
            } else {
                console.log(`${mapper[i].name} x${count}`)
                console.log("Transporting and washing")
                element = Math.floor(element)
                i += 1
                count = 0
            }
            
        }        
    });
}


solve([1373, 50000])