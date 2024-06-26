function solve(ch1, ch2) {
    
    const ch1Number = ch1.charCodeAt()
    const ch2Number = ch2.charCodeAt()
    let result = []

    for (let i = Math.min(ch1Number, ch2Number) + 1; i < Math.max(ch1Number, ch2Number); i++) {
        result.push(String.fromCharCode(i))
    }

    console.log(result.join(' '))
}


solve('#',':')