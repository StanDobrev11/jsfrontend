function solve(speed, area) {

    const speedLimit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20,
    }
   
    const limit = speedLimit[area]

    if (speed <= limit) {
        return console.log(`Driving ${speed} km/h in a ${limit} zone`)
    }

    let overSpeed = speed - limit
    let status;

    if (overSpeed > 40) {
        status = 'reckless driving'
    } else if (overSpeed > 20) {
        status = 'excessive speeding'
    } else {
        status = 'speeding'
    }

    return console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${limit} - ${status}`)
        
}

solve(40, 'city')
solve(21, 'residential')
solve(120, 'interstate')