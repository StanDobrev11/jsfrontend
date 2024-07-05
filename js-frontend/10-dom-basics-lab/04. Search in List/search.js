function search() {
   const townsListElement = document.getElementById('towns')
   const searchElement = document.getElementById('searchText')

   const searchValue = searchElement.value
   const resultElemet = document.getElementById('result')

   let matchCount = 0

   for (const town of townsListElement.children) {
      if (town.textContent.includes(searchValue)) {
         town.style.cssText += 'text-decoration: underline; font-weight: bold;';
         matchCount++
      } else {
         town.style.fontWeight = 'normal'
         town.style.textDecoration = 'none'
      }
   }

      resultElemet.textContent = `${matchCount} matches found`
   }

   // const matchedTowns = Array
   //    .from(townsListElement.children)
   //    .map(child => child.textContent)
   //    .filter(town => town.match(searchValue))
    
   
   // for (town of townsListElement.children) {
   //    if (matchedTowns.includes(town.textContent)) {
   //       town.style.fontWeight = 'bold'
   //       town.style.textDecoration = 'underline'
         
   //    } else {
   //       town.style.fontWeight = 'normal'
   //       town.style.textDecoration = 'none'
   //       resultElemet.textContent = ''
   //    }
   
      // resultElemet.textContent = `${matchedTowns.length} matches found`

   // }

   // console.log(matchedTowns)
   // console.log(townListArray)
// }
