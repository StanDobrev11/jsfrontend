function extractText() {
     
    const itemsElement = document.getElementById('items')
    const textAreaElement = document.getElementById('result')
    
    // textAreaElement.value = itemsElement.textContent
    
    let textArea = ''
    for (let el of itemsElement.children) {
        textArea += el.textContent + '\n'
    }
    
    textAreaElement.value = textArea   
}