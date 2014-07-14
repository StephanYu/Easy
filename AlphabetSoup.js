// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string

//Example 1
function AlphabetSoup(str) { 
  // code goes here  
    return str
    .split('')
    .sort()
    .join('');   
}

//Example 2
function AlphabetSoup(str) {
  return str
  .split("")
  .sort(function(a,b) { return a.charCodeAt(0) - b.charCodeAt(0) })
  .join("");       
}