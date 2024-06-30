function meetingManager(array) {
    
    const meetings = {}
    
    array.forEach(element => {
        let [weekday, name] = element.split(' ')
        
        if (meetings[weekday]) {
            console.log(`Conflict on ${weekday}!`)
        } else {
        meetings[weekday] = name
        console.log(`Scheduled for ${weekday}`)
        }
        
    });

    for (let weekday in meetings) {
        console.log(`${weekday} -> ${meetings[weekday]}`)
    }
    
}

meetingManager(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])