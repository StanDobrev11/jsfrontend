function solve(array) {

    const numOfAustro = array.shift()

    const team = {}
    for (let i = 0; i < numOfAustro; i++)
    {
        const [ name, oxygen, energy]  = array.shift().split(' ')
        team[name] = {
            'oxygen': Number(oxygen),
            'energy': Number(energy)
        }
    }

    while (true) {
        const [command, name, value ] = array.shift().split(' - ')

        if (command === 'End') {
            break
        }

        switch (command) {
            case 'Explore':
                if (team[name].energy > Number(value)) {
                    team[name].energy -= Number(value)
                    console.log(`${name} has successfully explored a new area and now has ${team[name].energy} energy!`)
                } else {
                    console.log(`${name} does not have enough energy to explore!`)
                }
                break;
            case 'Refuel':
                let energyRecovered
                if (team[name].energy + Number(value) > 200) {
                    energyRecovered = 200 - team[name].energy
                    team[name].energy = 200
                } else {
                    energyRecovered = Number(value)
                    team[name].energy += energyRecovered
                }
                console.log(`${name} refueled their energy by ${energyRecovered}!`);
                break;
            case 'Breathe':
                let oxygenRecovered
                if (team[name].oxygen + Number(value) > 100) {
                    oxygenRecovered = 100 - team[name].oxygen
                    team[name].oxygen = 100
                } else {
                    oxygenRecovered = Number(value)
                    team[name].oxygen += oxygenRecovered
                }
                console.log(`${name} took a breath and recovered ${oxygenRecovered} oxygen!`);
                break;
        }
    }

    Object.keys(team).forEach(name => console.log(`Astronaut: ${name}, Oxygen: ${team[name].oxygen}, Energy: ${team[name].energy}`))

}

solve([    '4',
    'Alice 60 100',
    'Bob 40 80',
    'Charlie 70 150',
    'Dave 80 180',
    'Explore - Bob - 60',
    'Refuel - Alice - 30',
    'Breathe - Charlie - 50',
    'Refuel - Dave - 40',
    'Explore - Bob - 40',
    'Breathe - Charlie - 30',
    'Explore - Alice - 40',
    'End']

  )