function convertToObj(string) {
    jsonObj = JSON.parse(string)
    Object.keys(jsonObj).forEach(propName => console.log(`${propName}: ${jsonObj[propName]}`))
}


convertToObj('{"name": "George", "age": 40, "town": "Sofia"}')