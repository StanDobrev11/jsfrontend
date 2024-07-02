function solve(array) {

    const heroList = []

    array.forEach(line => {
        
        const [heroName, heroLevel, ...restItems] = line.split(' / ')

        const hero = {
            name: heroName,
            level: Number(heroLevel),
            items: restItems,
        }

        heroList.push(hero)

    });

    heroList
        .sort((a, b) => a.level - b.level)
        .forEach(hero => console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items.join(', ')}`))

}

solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])

// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ])