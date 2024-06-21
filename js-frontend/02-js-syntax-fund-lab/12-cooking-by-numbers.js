function solve(value, ...args) {
    
    for (let i = 0; i <= args.length - 1; i++) { 
        
        const operation = {
            'chop': value / 2,
            'dice': Math.sqrt(value),
            'spice': value + 1,
            'bake': value * 3,
            'fillet': value - value * 0.2 
        }
        
        value = operation[args[i]]
        console.log(value)
    }    
}
    

// solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')