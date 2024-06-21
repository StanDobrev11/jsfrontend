function solve(fieldCapacity) {

    let dailyExtraction = 0; 
    let dayCount = 0;
    const workersConsumption = 26;
    const yeildDrop = 10;

    if (fieldCapacity < 100) {
        dailyExtraction = fieldCapacity - workersConsumption
    } else {
        while (fieldCapacity >= 100) {
            
            // extracting daily
            dailyExtraction += fieldCapacity
            // consumption of workers
            dailyExtraction -= workersConsumption
            // reduction in the field yeld next day
            fieldCapacity -= yeildDrop        
            // day count
            dayCount += 1
        }
    }

    // final consumption of the workers and end func
    dailyExtraction -= workersConsumption
    
    if (dailyExtraction < 0) {
        dailyExtraction = 0
    }

    console.log(dayCount)
    console.log(dailyExtraction)

}

// solve(109)