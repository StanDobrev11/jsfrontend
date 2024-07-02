function solve(array) {

    const dict = {}

    array.forEach(element => {
        element = JSON.parse(element)
        const term = Object.keys(element)[0]
        const value = Object.values(element)[0]
        dict[term] = value
    });


    
    let result = Object.entries(dict).sort((a, b) => a[0].localeCompare(b[0]))
    result
        .forEach(entry => console.log(`Term: ${entry[0]} => Definition: ${entry[1]}`))
}



solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the publicon a fixed route and for afare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}' 
    ])