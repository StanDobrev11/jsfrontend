function extract(content) {
    const contentElement = document.getElementById(content)

    const contentText = contentElement.textContent

    const pattern = /\(([^)]+)\)/g

    // const extractedText = 
    //     [...contentText
    //         .matchAll(pattern)
    //         .map(match => match[1])]
    //         .join('; ')

    const extractedText = 
        Array.from(contentText.matchAll(pattern))
        .map(match => match[1])
        .join('; ')

    return extractedText
  
}