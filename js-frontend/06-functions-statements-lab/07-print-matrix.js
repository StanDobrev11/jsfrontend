function solve(number) {

    const matrix = []
    
    for(let r = 0; r < number; r++) {
        let row = []
        for (let c = 0; c < number; c++) {
            row.push(number)
        }
        matrix.push(row)
    }

    const matrixString = matrix.map(row => row.join(' ')).join('\n');

    console.log(matrixString);
}


solve(7)