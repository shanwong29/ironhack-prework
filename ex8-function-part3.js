//Define a function that will receive an array as an argument and calculate a sum of all its elements. Example, if we pass the following array to that function: const prices = [5, 7.99, 9.99, 0.99, 21], it should return 44.97 as output. How would you concatenate $ sign in front of the sum?

const prices = [5, 7.99, 9.99, 0.99, 21];
var sum = 0;

function sumArrCalculator(array){
  array.forEach(function(num){
    sum += num;
  })
  return sum;
}

console.log("$" + sumArrCalculator(prices));


//Define a function stringToLetters() that receives a string as an argument and returns an array of its letters. Example:
// => expected output:
// ["h", "e", "l", "l", "o"];

var arr = [];

function stringToLetters(inputedString){
  for(var i = 0; i < inputedString.length; i++){
    arr.push(inputedString[i]);
  }
  console.log(arr);
}
stringToLetters("hello");
stringToLetters("Good Morning");

