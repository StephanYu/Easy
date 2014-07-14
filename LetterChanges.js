// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
//Example 1
function LetterChanges(str) { 
  
  return str
    .split("")
    .map(function(char){
      if (char == "z") return "A";
      if (char == "d") return "E";
      if (char == "h") return "I";
      if (char == "n") return "O";
      if (char == "t") return "U";

      var code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) return String.fromCharCode(code + 1);
    
      return char;
    })
    .join(""); 
         
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());           


//Example 2
function LetterChanges(str) { 
  
  var VOWELS = 'aeiou';
  var LOWER = 'abcdefghijklmnopqrstuvwxyz';
  var new_str = '';
  var newer_str = '';
  
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == 'z'){
      new_str += 'a';
    } else if (LOWER.indexOf(str.charAt(i)) != -1 ){
      new_str += LOWER[LOWER.indexOf(str.charAt(i)) + 1];
    } else {
      new_str += str.charAt(i);
    }
  }
  
  for (var j =0; j < new_str.length; j++) {
    if (VOWELS.indexOf(new_str.charAt(j)) != -1) {
      newer_str += new_str.charAt(j).toUpperCase();
    } else {
      newer_str += new_str.charAt(j);
    }
    
  }
  
  return newer_str;
}