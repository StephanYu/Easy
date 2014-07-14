// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 

//Example 1
function SimpleSymbols(str) { 

  // code goes here  
  var LETTERS = 'abcdefghijklmnopqrstuvwxyz';
  
  for (var i = 0; i < str.length; i++) {
    if (LETTERS.indexOf(str.charAt(i)) != -1) {
      if (i > 0 && i < (str.length - 1)) {  
        if (str.charAt(i - 1) != '+' || str.charAt(i + 1) != '+') {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return true;
}

//Example 2
function SimpleSymbols(str) { 
  var check = true;
  for (var i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    if (char >= 97 && char <= 122) {
      if (str.charAt(i - 1) != "+") check = false;
      if (str.charAt(i + 1) != "+") check = false;
    }
  }
  // code goes here  
  return check; 
         
}