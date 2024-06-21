function solve(visitorsCount, visitorsType, dayOfWeek) {
    
    let discountAmount;

    const pricePerVisitorType = {
        'Students': {'Friday': 8.45, 'Saturday': 9.80, 'Sunday': 10.46},
        'Business': {'Friday': 10.90, 'Saturday': 15.60, 'Sunday': 16.00},
        'Regular': {'Friday': 15.00, 'Saturday': 20.00, 'Sunday': 22.50},
    }
    const discounts = {
        'Students': 0.15,
        'Business': 10 * pricePerVisitorType['Business'][dayOfWeek],
        'Regular': 0.05,
    }

    function getDiscount(visitorsCount) {
    
        if (visitorsCount >= 100 && visitorsType == 'Business') {
            return true;
        } else if (visitorsCount >= 30 && visitorsType == 'Students') {
            return true;
        } else if (visitorsCount >= 10 && visitorsCount <= 20 && visitorsType == 'Regular') {
            return true;
        } else {
            return false;
        }
    }

    if (getDiscount(visitorsCount)) {
        discountAmount = discounts[visitorsType];
    } else {
        discountAmount = 0
    }

    const pricePerVisitor = pricePerVisitorType[visitorsType][dayOfWeek]
    
    totalAmount = visitorsCount * pricePerVisitor
    result = totalAmount - discountAmount * totalAmount
    
    if (visitorsType == 'Business') {
        result = totalAmount - discountAmount
    }
    

    console.log(`Total price: ${result.toFixed(2)}`)
}


solve(30, "Students", "Sunday")
solve(40, "Regular", "Saturday")