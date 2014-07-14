//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order. 

function FirstReverse(str) { 

  //return str; 
  return str.split(" ").reverse().join(" ");
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstReverse(readline());