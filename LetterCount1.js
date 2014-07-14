// Have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 

//Example 1
function LetterCountI(str) { 
  var words = str.split(" "); 
  var count = 0;
  var word = "";
  // code goes here
  for (var i = 0; i < words.length; i++) { 
    var wordx = words[i]; 
    var sum = 0; 
    for (var j = 0; j < words[i].length; j++) {  
      var letter = wordx[j]; 
      for (var k = 0; k < wordx.length; k++) { 
        if ((j != k) && (letter === wordx[k])){ 
          sum += 1;
        }
      }
    }
    if (sum > count) {
        count = sum;
        word = wordx;
    }
  }
  if (count > 0) {
    return word;
  } else{
    return "-1";
  }
}

//Example 2
function numRepeats(str) {
  var charCounts = str
    .split("")
    .map(function(char){
      return str.match(new RegExp(char,'g')).length;
    });

  return Math.max.apply(null, charCounts);
}

function LetterCountI(str) {

  var sortedWords = str
    .replace(/([^\w ])/g, "")
    .split(" ")
    .sort(function(a, b) { return numRepeats(b) - numRepeats(a); });

  return (numRepeats(sortedWords[0]) > 1) ? sortedWords[0] : -1;
         
}