function solve() {
   const addButtonElements = document.querySelectorAll('button.add-product')
   const textAreaElement = document.querySelector('textarea')
   const checkoutElement = document.querySelector('button.checkout')

   const productList = new Set()
   let totalSum = 0

   checkoutElement.addEventListener('click', () => {
      addButtonElements.forEach(add => {
         add.setAttribute('disabled', true)
      })
      
      textAreaElement.textContent +=
            `You bought ${Array.from(productList.keys()).join(', ')} for ${totalSum.toFixed(2)}.`
      checkoutElement.setAttribute('disabled', true)
   })
   
   addButtonElements.forEach(add => {
      const productElement = add.parentElement.parentElement
      // const productElement = add.closest('.product')

      add.addEventListener('click', () => { 
         const productTitleElement = productElement.querySelector('.product-title')
         const productPriceElement = productElement.querySelector('.product-line-price')
         
         const productPrice = Number(productPriceElement.textContent)
         const productName = productTitleElement.textContent

         textAreaElement.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`
         
         totalSum += productPrice
         productList.add(productName)

      })
   })
}