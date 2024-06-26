// function solve(a, b, operation) {

//     switch (operation) {
//         case 'add':
//             return a + b;
//         case 'subtract':
//             return a - b;
//         case 'divide':
//             return  a / b;
//         case 'multiply':
//             return a * b;         
//     }
   
// }




function solve(a, b, operator) {

    const operation = getOperation(operator)

    const result = operation(a, b)

    console.log(result)

    function getOperation(operator) {
        return {
            add: (a, b) => a + b,
            subtract: (a, b) => a - b,
            multiply: (a, b) => a * b,
            divide: (a, b) => a / b,
        }[operator]
    }

}


solve(5, 5, 'add')