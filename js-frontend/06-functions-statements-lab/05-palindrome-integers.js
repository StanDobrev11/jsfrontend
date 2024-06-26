function solve(array) {

    array.forEach(element => {
        console.log(Number(String(element).split('').reverse().join('')) === element)

    });

}


solve([123,323,421,121])