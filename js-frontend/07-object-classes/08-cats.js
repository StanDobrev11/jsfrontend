function catInput(array) {

    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
    
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    
    array
        .map(line => line.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow())


    // array.forEach(element => {
    //     let [name, age] = element.split(' ')
    //     let cat = new Cat(name, age)
    //     cat.meow()
    // });

}


catInput(['Candy 1', 'Poppy 3', 'Nyx 2'])