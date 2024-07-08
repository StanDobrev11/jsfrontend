function create(words) {
   const contentElement = document.getElementById('content')

   // fragment pseudo Node
   const divElementFragment = document.createDocumentFragment()

   words.forEach(section => {
      // creating <p></p> with initial props
      const pElement = document.createElement('p')
      pElement.textContent = section
      pElement.style.display = 'none'
      
      // creating div container for p element with event listner
      const divElement = document.createElement('div')
      divElement.appendChild(pElement)
      
      // attaching event to each element -> NOT OPTIMAL
      // better use EVENT DELEGATION
      // divElement.addEventListener('click', () => {
      //    pElement.style.display = 'inline-block'
      // })

      // attaching the div container to DIRECTLY DOM div content -> slow operation due to
      // costly DOM operations
      // contentElement.appendChild(divElement)

      // BETTER is to attach all in pseudo container - fragment, that will be attached ONLY
      // once at the end of the operation to the DOM and will improve performance
      // the fragment container is creataed before forEach
      divElementFragment.appendChild(divElement)
   });

   //  attached the fragment div to the DOM
   contentElement.appendChild(divElementFragment)

   // using event delegation
   contentElement.addEventListener('click', (e) => {
      console.log(e.currentTarget) // the whole current element
      console.log(e.target) // the element clicked
      
      e.target.querySelector('p').style.display = 'inline-block'
     
   })
}