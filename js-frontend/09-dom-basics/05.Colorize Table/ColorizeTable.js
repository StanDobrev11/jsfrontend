function colorize() {

    const evenRowElements = document.querySelectorAll('table tr:nth-child(even)')

    evenRowElements.forEach (row => row.style.background = 'teal')
    
}