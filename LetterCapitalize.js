// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space. 

//Example 1
function LetterCapitalize(str) { 

  var last = ' ';
  var res = '';
  
  for (var i = 0; i < str.length; i++) {
    if (last == ' ') {
      res += str[i].toUpperCase();
    } else {
      res += str[i];
    }
    last = str[i];
  }
  return res;     
}


//Example 2
function LetterCapitalize(str) {
  return str.replace(/\w\S*/g, function(txt){
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });        
}