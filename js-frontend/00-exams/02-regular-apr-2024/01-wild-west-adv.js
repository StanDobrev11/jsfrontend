function solve(array) {

    const numberOfHeroes = array.shift()
    const heroes = {}

    for (let i = 0; i < numberOfHeroes; i++) {
        const [ name, hp, bullets ] = array.shift().split(' ')
        heroes[name] = {
            'hp': Number(hp),
            'bullets': Number(bullets)
        }
    }
    
    while (array.length > 0) {
        const [command, ...rest] = array.shift().split(' - ')

        let heroName, targetName, atackerName, damage, amount

        switch (command) {
            case 'FireShot':
                [ heroName, targetName ] = rest                
                if (heroes[heroName].bullets > 0)
                    {
                        heroes[heroName].bullets -= 1
                        console.log(`${heroName} has successfully hit ${targetName} and now has ${heroes[heroName].bullets} bullets!`)
                    } else {
                        console.log(`${heroName} doesn't have enough bullets to shoot at ${targetName}!`)
                    }
                break
            
            case 'TakeHit':
                [ heroName, damage, atackerName ] = rest                
                
                heroes[heroName].hp -= damage
                
                if (heroes[heroName].hp > 0)
                    {
                        console.log(`${heroName} took a hit for ${damage} HP from ${atackerName} and now has ${heroes[heroName].hp} HP!`);
                    } else {
                        delete heroes[heroName]
                        console.log(`${heroName} was gunned down by ${atackerName}!`)
                    }
                break

            case 'Reload':
                [heroName] = rest

                if (heroes[heroName].bullets < 6) {
                    const reloadedBullets = 6 - heroes[heroName].bullets
                    heroes[heroName].bullets = 6
                    console.log(`${heroName} reloaded ${reloadedBullets} bullets!`);
                } else {
                    console.log(`${heroName}'s pistol is fully loaded!`);
                }
                break

            case 'PatchUp':
                [ heroName, amount ] = rest                
                
                if (heroes[heroName].hp >= 100)
                    {
                        console.log(`${heroName} is in full health!`)
                    } else {
                        if (heroes[heroName].hp + Number(amount) > 100) {
                            const amountRecovered = 100 - heroes[heroName].hp
                            console.log(`${heroName} patched up and recovered ${amountRecovered} HP!`);
                        } else {
                            heroes[heroName].hp += Number(amount)
                            console.log(`${heroName} patched up and recovered ${amount} HP!`);
                        }
                    }
                break
        }

    }

    Object.keys(heroes).map(heroName => console.log(`${heroName}\n HP: ${heroes[heroName].hp}\n Bullets: ${heroes[heroName].bullets}`))

}

solve(["2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"])
 
    
 