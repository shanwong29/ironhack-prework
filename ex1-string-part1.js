//Find out if there’s a specific word in a string:

const str1 = "Web Dev is amazing!"; 
console.log("include development?" + str1.includes("development"));
console.log(str1.includes("Development"));
console.log(str1.includes("web"));
console.log("includes 1?" + str1.includes(1));
console.log(str1.includes("ing"));
console.log(str1.includes("Web"));



//Concatenate the following strings:
let str = "";
let str2 = "Hey!";
let str3 = "How are you?";
let str4 = "10";
let str5 = "99";
console.log(str += (str2 + str3));

str = "";
console.log(str += (str4 + str5));




//Take out half of the sentence:
let sentence = "This is one meaningless sentence which needs to be cut in half.";
console.log(sentence.substring(0, Math.ceil(sentence.length/2)));



