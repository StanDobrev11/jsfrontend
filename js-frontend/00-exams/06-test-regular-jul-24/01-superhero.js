function solve(array) {

    const numberOfHeroes = array.shift()
    const heroes = {}
    
    for (let i = 0; i < numberOfHeroes; i++) {
        const [name, powers, energy] = array.shift().split('-')
        
        heroes[name] = {
            'powers': powers.split(',').join(', '),
            'energy': Number(energy)
        }
        
    }
    
    while (true) {
        const [command, ...rest] = array.shift().split(' * ')
        
        if (command === 'Evil Defeated!') {
            break
        }

        let name, power, eneryValue, newSuper, remainingEnergy, recoveredEnergy

        switch (command) {
            case 'Use Power':
                [name, power, eneryValue] = rest
                if (heroes[name].powers.includes(power) && heroes[name].energy >= eneryValue) {
                    heroes[name].energy -= eneryValue
                    remainingEnergy = heroes[name].energy
                    console.log(`${name} has used ${power} and now has ${remainingEnergy} energy!`);
                } else {
                    console.log(`${name} is unable to use ${power} or lacks energy!`);
                }
                break;
            case 'Train':
                [name, eneryValue] = rest
                if (heroes[name].energy === 100) {
                    console.log(`${name} is already at full energy!`);
                } else if (heroes[name].energy + Number(eneryValue) > 100) {
                    recoveredEnergy = 100 - heroes[name].energy
                    heroes[name].energy = 100
                    console.log(`${name} has trained and gained ${recoveredEnergy} energy!`);
                } else {
                    recoveredEnergy = Number(eneryValue)
                    heroes[name].energy += recoveredEnergy
                    console.log(`${name} has trained and gained ${recoveredEnergy} energy!`);
                }
                break;
            case 'Learn':
                [name, newSuper] = rest
                if (heroes[name].powers.includes(newSuper)) {
                    console.log(`${name} already knows ${newSuper}.`)
                } else {
                    heroes[name].powers += `, ${newSuper}`
                    console.log(`${name} has learned ${newSuper}!`);
                }
                break;
        
        }
        
    }
    Object.keys(heroes)
            .forEach(hero => console.log(`Superhero: ${hero}\n - Superpowers: ${heroes[hero].powers.split(',')}\n - Energy: ${heroes[hero].energy}`)
        )

}


solve([
    "2",
    "Iron Man-Repulsor Beams,Flight-100",
    "Thor-Lightning Strike,Hammer Throw-50",
    "Train * Thor * 20",
    "Learn * Thor * Hammer Throw",
    "Use Power * Iron Man * Repulsor Beams * 30",
    "Evil Defeated!"
])


