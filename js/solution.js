'use strict';


 let bodyMain = document.body;
   console.log(bodyMain);

   let theBestChild = bodyMain.childNodes;
     console.log(theBestChild);

  
   let allSiblings = document.querySelectorAll('li');
       console.log(allSiblings.length);
    
   let arr = [];
       for(let elem of allSiblings){
         arr.push(elem.innerHTML);
       }
   
       console.log(arr);
   
  