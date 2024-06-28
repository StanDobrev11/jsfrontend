function solve(progress) {

    if (progress === 100) {
        console.log("100% Complete!")
        console.log("[%%%%%%%%%%]")
    } else {

        console.log(`${progress}% [${'%'.repeat(progress / 10)}${'.'.repeat((100 - progress)/10)}]`) 
        console.log("Still loading...")
    }
}

solve(70)