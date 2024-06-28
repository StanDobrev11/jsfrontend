function solve(commands) {
    function clean(command) {
        return {
            soap: (value) => value + 10,
            water: (value) => value += value * 0.2,
            "vacuum cleaner": (value) => value += value * 0.25,
            mud: (value) => value -= value * 0.1
        }[command]
    }

    let value = 0

    commands.forEach(element => {
        value = clean(element)(value)
        
    });

    console.log(`The car is ${value.toFixed(2)}% clean.`)
}


solve(["soap", "water", "mud", "mud", "water", "mud",

    "vacuum cleaner"])