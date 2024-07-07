function create(words) {
   const contentElement = document.getElementById('content')

   words.forEach(section => {
      // creating <p></p> with initial props
      const pElement = document.createElement('p')
      pElement.textContent = section
      pElement.style.display = 'none'
      
      // creating div container for p element with event listner
      const divElement = document.createElement('div')
      divElement.appendChild(pElement)
      divElement.addEventListener('click', () => {
         pElement.style.display = 'inline-block'
      })

      // attaching the div container to div content
      contentElement.appendChild(divElement)
      
   });
}