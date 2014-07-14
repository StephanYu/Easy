// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For the test cases, the parameter num will be any number from 1 to 1000. 

function SimpleAdding(num) { 

  // code goes here  
var add= 0;
for (var i = num; i > 0; i--) {
    
    add += i;
}
  return add;    
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
SimpleAdding(readline());   