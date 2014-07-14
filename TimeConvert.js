// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon. 
//Example 1
function TimeConvert(num) { 

  // code goes here  
  var hour = parseInt(num/60);
  var minute = num % 60;
  var time = (hour + ":" + minute);
  return time; 


//Example 2
  function TimeConvert(num) {
  return Math.floor(num/60) + ":" + num % 60;    
}
     