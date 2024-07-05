function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      const searchValue = document.querySelector('#searchField').value
      const tableBodyElement = document.getElementsByTagName('tbody')
      const bodyRowElements = tableBodyElement[0].getElementsByTagName('tr')


      for (const rowElement of bodyRowElements) {
         if (rowElement.textContent.includes(searchValue)) {
            rowElement.className = 'select'
         } else {
            rowElement.className = ''
         }
      }
   }
}