
// add two of your favorite animals to the end of the array,
// remove the first two elements of the array,
// replace the last element in the array with the word “last”.

const animalArray = ["dog", "cat", "fish"];

animalArray.push("squirrel", "fox");
console.log(animalArray);

animalArray.shift();
animalArray.shift();
console.log(animalArray);

animalArray.splice(animalArray.length - 1, 1, "last");
console.log(animalArray);



// Create an array with 6 of your favorite foods. 
// With the loop of your choice, iterate through the array, but only print out the foods with an even index.

let favouriteFood = ["apple", "cake", "chocolate", "sushi", "avacado", "chips"]

favouriteFood.forEach(function(element){
  if (favouriteFood.indexOf(element)% 2 == 0){
    console.log(element);
  }
})

