
/* Use given object and loop through its properties and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). In opposite case, do what you did in the previous exercise: check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.*/

// Note: To test, un-comment out line discount: "7%".

let prod = {
    name: "headphones",
    price: 83.7,
    //discount: "7%",
};

// my code:

hasDiscount = false;

for(let key in prod){
  if (key == "discount"){
    hasDiscount = true;
  }
}

if (hasDiscount){
  console.log(`Already discounted by ${prod.discount}.`)
}else{
  if(prod.price > 100){
    prod.discount = "10%";
    prod.price *= (1-10/100);
  }
  else{
    prod.discount = "7%"
    prod.price *= (1-7/100);
  }
}


console.log(prod);
// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.
