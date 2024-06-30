function solve(obj) {
    // const keyValues = Object.entries(obj)
    // keyValues.forEach(element => {
    //     let key = element[0]
    //     let value = element[1]
        
    //     console.log(`${key} -> ${value}`)
    // });

    Object.keys(obj).forEach(propName => console.log(`${propName} -> ${obj[propName]}`))

}



solve({
    name: "Sofia",   
    area: 492,    
    population: 1238438,    
    country: "Bulgaria",
    postCode: "1000",
})