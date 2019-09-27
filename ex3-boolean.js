/*Define two string variables and compare them so you can print out which one has more characters, 
or they have an equal number of characters*/

let str1 = "badminton";
let str2 = "table tennis";

if (str1.length == str2.length){
  console.log(`${str1} and ${str2} have an equal number of character.`);
}
else if(str1.length > str2.length){
  console.log(`${str1} has more character than ${str2}.`);
}
else{
  console.log(`${str2} has more character than ${str1}.`);
}




//Given the word, check if it exists in the given sentence and print out if it does or it doesn’t:

let word = "web";
let sentence = "I enrolled Ironhack because I love web development.";

if (sentence.includes(word)){
  console.log(`This sentence includes ${word}.`);
}else{
  console.log(`This sentence does not include ${word}.`);
}




//odd / even number calculation

let num = 219;

if(num % 2 == 0){
  console.log(`${num} is an even number.`);
}else{
  console.log(`${num} is an odd number.`);
}



//century calculation

let year = -2001;
let century = 0;

if(year > 0){
  century = Math.trunc((year - 1)/100) + 1;
  console.log(`year ${year} => ${century} century`);
}
else if(year < 0){
  century = Math.abs(Math.trunc((year + 1)/100) - 1);
  console.log(`year ${year} => ${century} century BC`);
}
else{
    console.log(`Year ${year} is not a proper year.`);
}
