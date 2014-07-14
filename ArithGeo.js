// Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements. 

//Example1
function ArithGeo(arr) { 
  var diff = arr[1]-arr[0];
  var factor = arr[1]/arr[0];
  var ari = true, geo = true;
  for (var i = 2; i < arr.length; i++)
  {
    if (arr.length < 3) return -1;
    if (arr[i]-arr[i-1]!= diff) ari = false;
    if (arr[i]/arr[i-1]!= factor) geo = false;
  }
  if (ari) return "Arithmetic";
  if (geo) return "Geometric";
  return -1;
} 

//Example 2
function ArithGeo(arr) { 
  var diff = arr[1] - arr[0];
  var arith = true;
  for (var i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i-1]) != diff) arith = false;
  }
  if (arith) return "Arithmetic";

  var factor = arr[1] / arr[0];
  var geo = true;
  for (var i = 2; i < arr.length; i++) {
    if ((arr[i] / arr[i-1]) != factor) geo = false;
  }
  if (geo) return "Geometric";
  
  return -1;
         
}