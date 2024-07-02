function solve(array) {
    const parkingLot = []
    
    array.forEach(element => {
        const [command, number] = element.split(', ')
        
        command === 'IN'
            ? parkingLot.push(number)
            : parkingLot.splice(parkingLot.indexOf(number), 1)
            
    // if (command === 'IN') {
    //     parkingLot.push(number)
    // } else if (command === 'OUT' && parkingLot.includes(number)) {
    //     const index = parkingLot.indexOf(number)
    //     parkingLot.splice(index, 1)
      
    // }
    });
    
    if (parkingLot.length > 0) {
    parkingLot
        .sort((a, b) => a.localeCompare(b))
        // .sort((a, b) => a[2,4] - b[2,4])
        .forEach(car => console.log(car))
        
    } else {
        console.log('Parking Lot is Empty')
    }
}

// solve(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])

solve(['OUT, CA2844AA', 'IN, CA2844AA', 'IN, CA2844AA'])