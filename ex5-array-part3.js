
//     Given array of numbers, calculate the sum:

const prices = [10.99, 44.56, 112.79, 3, 5];
let sum = 0; 

prices.forEach(function(num){
    sum += num;           
});

console.log(`sum = ${Math.round(sum * 10)/10}`);