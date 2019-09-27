//make the loop start at 30, and count down to 0.

let count = 30;

while(count >= 0){
  console.log(count);
  count--;
}

//Using a for loop, display a countdown from 10 to 0. 

for (let i = 10; i >= 0; i--){
  console.log(i);
}




//     print the numbers 1 through 50,
//     if the number is divisible by 5, skip it,
//     if the number is divisible by 10 or 15, print “Donkey!”,
//     if the number is not divisible by 2 and the previous number is divisible by 10, print “Monkey!”.


let num;
let ans = "";

for (num = 1; num <= 50; num++){
  if(num % 10 == 0 || num % 15 == 0) {
    ans += "Donkey! ";
  }
  
  else if(num % 5 == 0){
    continue;
  }
    
  else if (num % 2 != 0 && (num - 1) % 10 == 0){
    ans += "Monkey! ";
  }
  else{
    ans += num + " ";
  }

}console.log(ans);



