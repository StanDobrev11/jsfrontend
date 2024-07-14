function solve(array) {
    const teamMembers = array.shift()

    const workers = {}
    for (let i = 0; i < teamMembers; i++) {
        let [ name, shift, drinks ] = array
                            .shift()
                            .split(' ')

        drinks = drinks.split(',')

        let workerDetails = {
                'shift': shift,
                'drinks': drinks
            }
        
        workers[name] = workerDetails
    }
      
}

solve([

    '3',
    
    'Alice day Espresso,Cappuccino',
    
    'Bob night Latte,Mocha',
    
    'Carol day Americano,Mocha',
    
    'Prepare / Alice / day / Espresso',
    
    'Change Shift / Bob / night',
    
    'Learn / Carol / Latte',
    
    'Learn / Bob / Latte',
    
    'Prepare / Bob / night / Latte',
    
    'Closed'])