// Have the function DivisionStringified(num1,num2) take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345". 
 
//Example 1
function DivisionStringified(num1,num2) { 
  
  var number = Math.round(num1/num2);
  var thousands = parseInt(number/1000);
  var hundreds = number % 1000;
  
  if (number.length <= 3) return str;
  if (thousands > 0) {
    return thousands.toString() + "," + hundreds.toString();
  } else {
    return hundreds.toString();
  }
         
}

//Example 2
function DivisionStringified(num1,num2) { 

  return (Math.round(num1 / num2) + '').split('')
    .map(function(d, i, a){return i != 0 && (a.length - i) % 3 == 0 ? ',' + d : d;})
    .join(''); 
         
}

//Example 3
function format(str) {
  if (str.length <= 3) return str;
  var sub = str.slice(-3);
  var str = str.split("").splice(0,str.length - 3).join("");
  return format(str) + "," + sub;
}

function DivisionStringified(num1,num2) { 

  var num = Math.round(num1 / num2) + '';
  // code goes here  
  return format(num); 
         
}