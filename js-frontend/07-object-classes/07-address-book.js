function insertIntoAddressBook(array) {
    const addressBook = {}

    array.forEach(element => {
        let [name, address] = element.split(':')
        addressBook[name] = address
    });

    const sortedObject = Object
                            .entries(addressBook)
                            .sort((a, b) => a[0].localeCompare(b[0]))
    
    const sortedAddressBook = Object.fromEntries(sortedObject)

    for (let name in sortedAddressBook) {
        console.log(`${name} -> ${sortedAddressBook[name]}`)
    }
}

insertIntoAddressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'])