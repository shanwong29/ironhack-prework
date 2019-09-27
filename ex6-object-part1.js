//Print (console.log()) value of the property name in the given object:

let student = {
    name:"Max",
    age: 27
};

//my code:
console.log(student.name);




// Find the value of the price property and if it is greater than 100, discount it by 10%. 
// If that’s not the case, discount it by 7%. 
// Update the object with : 
// the new property - discount and the corresponding value (7% or 10%) and the new price.

let product = {
    name: "headphones",
    price: 100
};

// my code:
if(product.price > 100){
  product.price *= (1-10/100);
  product.discount = "10%";
}else{
  product.price *= (1-7/100);
  product.discount = "7%";
}

console.log("Updated product:", product);