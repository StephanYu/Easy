// Have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 

//Example 1
function SecondGreatLow(arr) { 
  var unique = [arr[0]];
  for(var i = 1; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) == -1) {
      unique.push(arr[i]);
    }
  }
  unique.sort(function(a,b){return a - b});
  return unique[1] + " " + unique[unique.length-2]; 
}

//Example 2
function SecondGreatLow(arr) { 

  // Sort array in numerical order
  arr = arr.sort(function (a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
  });

  // Remove array dupes
  arr = arr.filter(function(elem, pos) {
      return arr.indexOf(elem) == pos;
  })
    
  // code goes here  
  return arr[1] + " " + arr[arr.length-2]; 
         
}