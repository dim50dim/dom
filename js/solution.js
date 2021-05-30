'use strict';


 let bodyMain = document.body;
   console.log(bodyMain);

   let theBestChild = bodyMain.childNodes;
     console.log(theBestChild);

  
   let allSiblings = document.querySelectorAll('li');


   for(let elem of allSiblings){
       console.log(elem.innerHTML); 
   }
   let arr = Array.from(allSiblings);
   console.log(arr);