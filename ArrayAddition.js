// Have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 

//Example 1
function ArrayAdditionI(arr) { 
  arr.sort(function(a,b){return a - b})
  var largest = arr.pop();
  var sum = 0;
  for (var i = 0; i < arr.length; i++){
    sum += arr[i];
    for (var j = 0; j < arr.length; j++){
      if (i != j) {
        sum += arr[j];
        if (sum == largest) {
          return true;
        }
      }
    }
    for (var k = 0; k < arr.length; k++) {
      if (i != k) {
        sum -= arr[k];
        if (sum == largest) {
          return true;
        }
      }
    }
    sum = 0;
  } 
  return false;       
}

//Example 2
function ArrayAdditionI(arr) { 

  // code goes here  
  arr.sort(function(a,b){return b-a;});
  var max = arr.shift();
  for (var i = 0; i < Math.pow(2, arr.length); i++) {
    var sum = 0;
    for (var j = 0; j < arr.length; j++) {
      if (i >> j & 1) sum += arr[j];
    }
    if (sum == max) return true;
  }
  return false; 
         
}



//Example 3
function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function check(arr, max) {
  if (sum(arr) == max) return true;
  for (var i = 0; i < arr.length; i++) {
    var newArr = arr.slice(0);
    newArr.splice(i, 1);
    if (check(newArr, max)) return true;
  };
  return false;
}

function ArrayAdditionI(arr) { 

  var max = Math.max.apply(null, arr);

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == max) arr.splice(i, 1);
  };

  return check(arr, max);
         
}








