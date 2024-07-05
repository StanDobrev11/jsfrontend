function solve() {
	document.querySelector('#btnSend').addEventListener('click', onClick);


	function onClick () {
		
		function getBestSalary(restName) {

			let bestSalary = 0
			const workers = restaurants[restName]
			for (const wrkrName in workers) {
				let wrkrSalary = Number(workers[wrkrName])

				if (wrkrSalary > bestSalary) {
					bestSalary = wrkrSalary
				}
			}

			return bestSalary
		}
		
		const inputText = document.querySelector('textarea').value
		const outputBestRestaurant = document.querySelector('#bestRestaurant p')
		const outputBestRestaurantWorkers = document.querySelector('#workers p')
		const inputArray = inputText.match(/"([^"]*)"/g)
		const restaurants = {}
		
		const resultArray = []
		for (const item of inputArray) {
			resultArray.push(item
								.replace('\"', '')
								.replace('\"', '')
								.split(' - '))			
		}

		for (const restaurantDetails of resultArray) {
			let workers = {}
			const [restName, restWorkers] = restaurantDetails
			
			if (!restaurants[restName]) {
				restaurants[restName] = workers
			} else {
				workers = restaurants[restName]
			}
			
			for (let wrkr of restWorkers.split(', ')) {
				const [wrkrName, wrkrSalary] = wrkr.split(' ')
				workers[wrkrName] = wrkrSalary
			}

		}
		
		// get best restaurant by average salary
		const bestAverageSalaries = {}
		let bestRestName = ''
		for (const restName in restaurants) {
			const workers = restaurants[restName]
			let ttlSalary = 0
			for (const wrkrName in workers) {
				ttlSalary += Number(workers[wrkrName])
			}

			let bestAverageSalary = ttlSalary / Object.keys(workers).length
			bestAverageSalaries[bestAverageSalary] = restName
		}

		let bestAverage = Math.max(...Object.keys(bestAverageSalaries))
		
		bestRestName = bestAverageSalaries[bestAverage]
		let bestRestSalary = getBestSalary(bestRestName)
		
		bestRestaurantString = `Name: ${bestRestName} Average Salary: ${bestAverage.toFixed(2)} Best Salary: ${bestRestSalary.toFixed(2)}`
		outputBestRestaurant.textContent = bestRestaurantString
		
		workers = restaurants[bestRestName]
		bestWorksersString = ''
		for (worker in workers) {
			bestWorksersString += `Name: ${worker} With Salary: ${workers[worker]} `
		}

		outputBestRestaurantWorkers.textContent = bestWorksersString

	}
}
