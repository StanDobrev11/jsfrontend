function solve(number1, number2, string) {
    switch(string) {
        case('+'): 
        console.log(number1 + number2);
        break;
        
        case('-'):
        console.log(number1 - number2);
        break;

        case('/'):
        console.log(number1 / number2);
        break;

        case('*'):
        console.log(number1 * number2);
        break;
        
        case('%'):
        console.log(number1 % number2);
        break;

        case('**'):
        console.log(number1 ** number2);
        break;
    }
}


solve(2, 3, '-')