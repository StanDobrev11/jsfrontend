function employeesInsert(array) {
 
    array.forEach(name => {
        let number = name.length
        console.log(`Name: ${name} -- Personal Number: ${number}`)
    });
    
}

employeesInsert([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])