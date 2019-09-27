//Define a function, name it however you prefer respecting the good naming conventions, that will do the same as we did earlier - loop through the array and print the type of each element of the array in the console.
function loopArr(arr){
    arr.forEach(function(element){
      console.log(element);
    })
}
  
arrColour = ["red", "pink", "orange", "yellow", "blue", "green"]
loopArr(arrColour);
  
  
//Define a function getCredentials() that will receive the following object as argument and print the following result:
// => expected output:
// Username is: ironhacker and the password is: 123iron345.

let user = {
username: "ironhacker",
password: "123iron345"
}

//my code:
function getCredentials(credentialInfo){
    for(let key in credentialInfo){
        console.log(`${key} is: ${credentialInfo[key]}`);
    }
}

getCredentials(user);