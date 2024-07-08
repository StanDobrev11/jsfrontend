function solve() {
   
    const sectionElements = document.querySelectorAll('section')
    const correctAnswerList = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']
    const resultElement = document.getElementById('results')
    let correctAnswers = 0

    sectionElements.forEach(section => {
        section.addEventListener('click', (e) => {
            if (e.target.tagName === 'P') {
                if (correctAnswerList.includes(e.target.textContent)) {
                    correctAnswers += 1
                }
                section.style.display = 'none'
                let nextSectionElement = section.nextElementSibling
                nextSectionElement.style.display = 'block'
                if (nextSectionElement.tagName === 'UL') {
                    
                    if (correctAnswers === 3) {
                        resultElement.querySelector('h1').textContent = "You are recognized as top JavaScript fan!"
                    } else {
                        resultElement.querySelector('h1').textContent = `You have ${correctAnswers} right answers`
                    }
                }
            }
        })
    })
}
