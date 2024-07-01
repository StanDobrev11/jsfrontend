function solve(array) {

    const town = {}

    array.forEach(element => {
        let [name, lat, long] = element.split(' | ')
        town.town = name
        town.latitude = Number(lat).toFixed(2)
        town.longitude = Number(long).toFixed(2)
        console.log(town)
    });
    
}

solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])