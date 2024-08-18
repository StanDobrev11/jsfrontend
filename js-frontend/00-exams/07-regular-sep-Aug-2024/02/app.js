window.addEventListener("load", solve);

function solve() {

	const firstInputId = 'laptop-model'
	const secondInputId = 'storage'
	const thirdInputId = 'price'
	const ulFromInputId = 'check-list'
	const ulFinalId = 'laptops-list'

	const addButtonId = 'add-btn'
	const editButtonClass = 'btn edit'
	const editButtonText = 'Edit'
	const nextButtonclass = 'btn ok'
	const nextButtonText = 'Ok'

	const addButton = document.getElementById(addButtonId)
	const firstInput = document.getElementById(firstInputId)
	const secondInput = document.getElementById(secondInputId)
	const thirdInput = document.getElementById(thirdInputId)

	const ulFromInput = document.getElementById(ulFromInputId)
	const ulFinalElement = document.getElementById(ulFinalId)

	const inputMapper = {}
	inputMapper[firstInputId] = firstInput
	inputMapper[secondInputId] = secondInput
	inputMapper[thirdInputId] = thirdInput

	addButton.addEventListener('click', (e) => {
		e.preventDefault()
		if (checkValidInput()) {
			const liElement = createLiRecordElement()
			ulFromInput.appendChild(liElement)
			clearInputFields()
			addButton.setAttribute('disabled', true)
		}
	})

	function createButtons() {

		const divElement = document.createDocumentFragment()

		const editButton = document.createElement('button')
		editButton.textContent = editButtonText
		editButton.className = editButtonClass
		editButton.addEventListener('click', (e) => {
			const liElement = e.target.parentElement
			const articleElement = liElement.querySelector('article')
			const inputValues = []
			Array.from(articleElement.children)
				.forEach(element => {
					inputValues.push(element.textContent)
				})

			populateInputFields(inputValues)
			addButton.removeAttribute('disabled')
			liElement.remove()
		})


		const nextButton = document.createElement('button')
		nextButton.textContent = nextButtonText
		nextButton.className = nextButtonclass
		nextButton.addEventListener('click', (e) => {

			const liElement = e.target.parentElement
			editButton.remove()
			nextButton.remove()
			addButton.removeAttribute('disabled')

			ulFinalElement.appendChild(liElement)

			const clearButton = document.querySelector('.btn.clear')
			clearButton.addEventListener('click', (e) => {
				location.reload(true)

			})

		})

		divElement.appendChild(editButton)
		divElement.appendChild(nextButton)

		return divElement
	}

	function createDetailsArticle() {
		const articleElement = document.createElement('article')

		for (let i = 0; i < Object.keys(inputMapper).length; i++) {
			inputId = Object.keys(inputMapper)[i]
			const pElement = document.createElement('p')
			
			
			if (i == 0) {
				pElement.textContent = inputMapper[inputId].value
			} else if (i == 1) {
				pElement.textContent = 'Memory: ' + inputMapper[inputId].value + ' TB'
			} else {
				pElement.textContent = 'Price: ' + inputMapper[inputId].value + '$'
			}
			
			articleElement.appendChild(pElement)
		}

		return articleElement
	}



	function createLiRecordElement() {

		const liElement = document.createElement('li')
		liElement.classList.add('laptop-item')

		const articleElement = createDetailsArticle()
		const divButtonsElement = createButtons()

		liElement.appendChild(articleElement)
		liElement.appendChild(divButtonsElement)

		return liElement
	}

	function checkValidInput() {
		return inputsArray().every(input => input.value !== '')
	}

	function inputsArray() {
		return Object.values(inputMapper)
	}

	function clearInputFields() {
		inputsArray().map(input => input.value = '')
	}

	function populateInputFields(inputValues) {
		inputsArray().map((input, i) => {
			if (i === 0) {
				input.value = inputValues[i]
			} else if (i === 1) {
				input.value = inputValues[i].split(' ')[1] 
			} else {
				input.value = inputValues[i].split(' ')[1].replace('$', '')
			}

		})
	}
}
