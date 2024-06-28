function solve(array) {
    const [x1, y1, x2, y2] = array
    // Calculate Cartesian Distance
    function calculateDistance(x, y) {
        return Math.sqrt((x) ** 2 + (y) ** 2)
    }
    
    const points = [
        {x: x1, y: y1, description: `{${x1}, ${y1}} to {0, 0}`},
        {x: x2, y: y2, description: `{${x2}, ${y2}} to {0, 0}`},
        {x: x1 - x2, y: y1 - y2, description: `{${x1}, ${y1}} to {${x2}, ${y2}}`}
        ]

    const cartesianPoint = {x: 0, y: 0}

    let status;
    let result;

    for (let i = 0; i <= 2; i++) {
        result = calculateDistance(x=points[i].x, y=points[i].y)
        if (Number.isInteger(result)) {
            status = ' is valid'
        } else {
            status = ' is invalid'
        }

        console.log(points[i].description + status)
    }
}


solve([3, 0, 0, 4])