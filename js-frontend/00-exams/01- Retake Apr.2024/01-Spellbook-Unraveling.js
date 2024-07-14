function solve(array) {

    let hiddenSpell = array.shift()

    while (true) {
        let item = array.shift()
        if (item === 'End')
            break
        
        item = item.split('!')
        
        if (item.length === 3) {
            let fromIdx = item[1]
            let toIdx = item[2]
            hiddenSpell = hiddenSpell.split('').splice(fromIdx, toIdx - fromIdx).join('')
                
            console.log(hiddenSpell)
        } else if (item.length === 2) {
            let substring = item[1]
            if (hiddenSpell.includes(substring)) {
                let substringIdx = hiddenSpell.indexOf(substring)
                hiddenSpell = hiddenSpell.replace(substring, '')        
                hiddenSpell += substring
                                .split('')
                                .reverse()
                                .join('')                
                console.log(hiddenSpell)
            } else {
                console.log('Error')
            }
        } else {
            hiddenSpell = hiddenSpell
                .split('')
                .filter((chr, idx) => idx % 2 === 0)
                .join('')
            console.log(hiddenSpell)
        }

        

    }
    console.log(`The concealed spell is: ${hiddenSpell}`)
}

solve((["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
    )
  