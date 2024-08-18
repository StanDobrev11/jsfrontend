function solve(array) {

    const numberOfCchemicals = array.shift()
    const chemicalDetails = {}

    for (let i = 0; i < numberOfCchemicals; i++) {
        const [chemicalName, chemicalQuantity] = array.shift().split(' # ')
        chemicalDetails[chemicalName] = {
            'quantity': Number(chemicalQuantity)
        }
    }

    while (true) {
        const [command, ...rest] = array.shift().split(' # ')

        if (command === 'End') {
            break
        }

        let chemicalOne, chemicalTwo, amount, chemical, amountRecovered, formula

        switch (command) {
            case 'Mix':
                [chemicalOne, chemicalTwo, amount] = rest
                if (chemicalDetails[chemicalOne].quantity >= Number(amount) && chemicalDetails[chemicalTwo].quantity >= Number(amount)) {
                    chemicalDetails[chemicalOne].quantity -= Number(amount)
                    chemicalDetails[chemicalTwo].quantity -= Number(amount)
                    console.log(`${chemicalOne} and ${chemicalTwo} have been mixed. ${amount} units of each were used.`);
                } else {
                    console.log(`Insufficient quantity of ${chemicalOne}/${chemicalTwo} to mix.`);
                }
                break;
            case 'Replenish':
                [chemical, amount] = rest
                if (chemical in chemicalDetails) {
                    if (chemicalDetails[chemical].quantity + Number(amount) > 500) {
                        amountRecovered = 500 - chemicalDetails[chemical].quantity
                        chemicalDetails[chemical].quantity = 500
                        console.log(`${chemical} quantity increased by ${amountRecovered} units, reaching maximum capacity of 500 units!`);
                    } else {
                        chemicalDetails[chemical].quantity += Number(amount)
                        console.log(`${chemical} quantity increased by ${amount} units!`);
                    }
                } else {
                    console.log(`The Chemical ${chemical} is not available in the lab.`);
                }
                break;

            case 'Add Formula':
                [chemical, formula] = rest
                if (chemical in chemicalDetails) {
                    chemicalDetails[chemical]['formula'] = formula
                    console.log(`${chemical} has been assigned the formula ${formula}.`);
                } else {
                    console.log(`The Chemical ${chemical} is not available in the lab.`);
                }
                break;
        }

    }

    Object.keys(chemicalDetails)
        .forEach(chemical => {
            if (chemicalDetails[chemical].hasOwnProperty('formula')) { 
                console.log(`Chemical: ${chemical}, Quantity: ${chemicalDetails[chemical].quantity}, Formula: ${chemicalDetails[chemical].formula}`) 
            } else {
                console.log(`Chemical: ${chemical}, Quantity: ${chemicalDetails[chemical].quantity}`);
            }
        }
        )

}

solve([ '3',
    'Sodium # 300',
    'Chlorine # 100',
    'Hydrogen # 200',
    'Mix # Sodium # Chlorine # 200',
    'Replenish # Sodium # 250',
    'Add Formula # Sulfuric Acid # H2SO4',
    'Add Formula # Sodium # Na',
    'Mix # Hydrogen # Chlorine # 50',
    'End']
  
)