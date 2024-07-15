function solve(array) {

    let codedCrypto = array.shift()

    while (true) {
        let line = array.shift()
        let [command, ...rest] = line.split('?')
        if (command === 'Buy')
            break

        switch (command) {
            case 'TakeEven':
                codedCrypto = codedCrypto.split('').filter((ch, i) => i % 2 === 0).join('')
                console.log(codedCrypto)
                break;
            case 'Reverse':
                let substr = rest[0]
                if (codedCrypto.includes(substr)) {
                    codedCrypto = codedCrypto.replace(substr, '')
                    codedCrypto += substr.split('').reverse().join('')
                    console.log(codedCrypto)
                } else {
                    console.log('error'); 
                }
                break;
            case 'ChangeAll':
                const [ substring, replacement ] = rest
                while (codedCrypto.includes(substring)) {
                    codedCrypto = codedCrypto.replace(substring, replacement)
                }
                console.log(codedCrypto);
                break;

        }
    }
    console.log(`The cryptocurrency is: ${codedCrypto}`);
}

solve(["PZDfA2PkAsakhnefZ7aZ", 
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"])
    
    