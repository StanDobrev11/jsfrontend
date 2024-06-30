function convertToJson(name, lastName, hairColor) {
    person = {
        name,
        lastName,
        hairColor
    }

    console.log(JSON.stringify(person, null, 2))
}

convertToJson('George', 'Jones', 'Brown')