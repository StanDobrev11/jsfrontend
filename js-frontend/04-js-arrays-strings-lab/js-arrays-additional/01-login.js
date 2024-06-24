function solve(array) {
    const username = array.shift()
    const password = username.split('').reverse().join('')

    let isLoggedIn = false
    for (let i = 0; i < 4; i++) {
        let testPass = array[i]
        if (password === testPass) {
            console.log(`User ${username} logged in.`)
            isLoggedIn = true;
            break;
        } else {
            if (i === 3) {
                break;
            }
            console.log("Incorrect password. Try again.")
        }
    }

    if (!isLoggedIn) {
    console.log(`User ${username} blocked!`)
    }
}

solve(['Acer','login','go','let me in','recA'])
solve(['momo','omom'])
solve(['sunny','rainy','cloudy','sunny','not sunny'])