function insertToPhoneBook(array) {
    
    const phoneBook  = {}
    array.forEach(element => {
        let [name, number] = element.split(' ')
        phoneBook[name] = number
    });

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`)
    }

}

insertToPhoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112','Tim 0876566344'])