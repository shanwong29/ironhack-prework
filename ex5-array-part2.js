

// Check if the word appears in given array and print out if it does or doesn’t:

let word = "miami";
let arr = ["bcn", "mia", "sao", "mex", "par", "miami", "ams", "ber", "paris", "lis", "mad"];

let appear = false;

for(let i = 0; i < arr.length; i++){
    if(word == arr[i]){
    appear = true;
    break;
    }
}

//using the forEach method:
//
// arr.forEach(function(element){
//     if(word == element){
//       appear = true;
//     }
//   });

if(appear){
    console.log(`${word} appears in the given array.`);
}else{
    console.log(`${word} does NOT appear in the given array.`);
}
   
