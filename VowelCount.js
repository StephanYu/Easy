// Have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

//Example 1
function VowelCount(str) { 
  // code goes here  
  var vowel = "aeiou";
  var count = 0;
  for (var i = 0; i <= str.length; i++){
    if (vowel.indexOf(str.charAt(i)) !== -1) count += 1; 
  }
  return count; 
}

//Example2

function VowelCount(str) {
  return str.match(/[aeiou]/g).length;       
}