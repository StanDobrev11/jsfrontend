function solve(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {


    let repairs = {
        'helmet': 0,
        'sword': 0,
        'shield': 0,
        'armor': 0,
    }
    
    for (let currentFight = 1; currentFight <= lostFights; currentFight++) {

        if (currentFight % 2 === 0 && currentFight % 3 ===0) {
            repairs['shield'] += 1;
            repairs['sword'] += 1;
            repairs['helmet'] += 1;

            if (repairs['shield'] % 2 === 0) {
                repairs['armor'] += 1
        }
        } else if (currentFight % 3 === 0) {
            repairs['sword'] += 1;
        } else if (currentFight % 2 === 0) {
            repairs['helmet'] += 1;
        }
    }
    let totalAmount = repairs['helmet'] * helmetPrice + repairs['sword'] * swordPrice + repairs['shield'] * shieldPrice + repairs['armor'] * armorPrice

    console.log(`Gladiator expenses: ${totalAmount.toFixed(2)} aureus`)
}

solve(7, 2, 3, 4, 5)