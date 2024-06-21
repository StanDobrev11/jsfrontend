function solve(number1, string, number2) {
    switch(string) {
        case('+'): 
        console.log((number1 + number2).toFixed(2));
        break;
        
        case('-'):
        console.log((number1 - number2).toFixed(2));
        break;

        case('/'):
        console.log((number1 / number2).toFixed(2));
        break;

        case('*'):
        console.log((number1 * number2).toFixed(2));
        break;
        
        case('%'):
        console.log((number1 % number2).toFixed(2));
        break;

        case('**'):
        console.log((number1 ** number2).toFixed(2));
        break;
    }
}


solve(2, '/', 3)