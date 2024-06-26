function smallestOfThreeNumbers(a, b, c) {

    const x = (a > b) ? b : a
    console.log((x > c) ? c : x)

}

smallestOfThreeNumbers(1, 2,-3)