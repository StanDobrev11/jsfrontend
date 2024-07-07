function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient')
    const resultElement = document.getElementById('result')

    gradientElement.addEventListener('mousemove', (event) => {
        const rectWidth = event.target.clientWidth
        const currentPosition = event.offsetX
        
        const result = Math.floor((currentPosition / rectWidth) * 100)

        resultElement.textContent = `${result}%`
    })
}