//1. Define function welcome() that will receive one argument, your name, and greet you with your name.
function welcome(name){
    return `Hello, ${name}!`;
  }
  
console.log(welcome("Shan"));
  
  
  
//2. Define a function printToTwenty() that will print the numbers from 0 to 20 to the console ( don’t forget we have to invoke/call the function to see it working )
function printToTwenty(){
    for(var i = 0; i <= 20; i++){
        console.log(i);
    }
}
printToTwenty();
  
  
  
  
//3. Define a function printNumbers() that receives one argument and prints the numbers from 0 to whatever number we pass to it as an argument
  
function printNumbers(num){
    if(num >= 0){
        for(var j = 0; j <= num; j++){
        console.log(j);
        }
    }else{
        console.log("Please enter a positive number.")
    }
}

printNumbers(8);
printNumbers(-1);
  
  
  