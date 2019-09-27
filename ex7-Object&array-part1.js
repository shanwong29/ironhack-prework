/*1. Using the given array of objects: 
display price of iPhone, 
display both phones’ names,
add a new phone at the beginning of the array, 
remove the last element of the array*/

let products = [
    {
        name: "iPhone",
        price: 799.99
    },
    {
        name: "Samsung Galaxy S10",
        price: 900.00
    }
]

//my code:
console.log(`iPhone price = ${products[0].price}`);
console.log(products[0].name, products[1].name);




/* 2. Given the array, print:
your course type (full-time or part-time)
the most familiar topic
the least familiar topic */

let course = {
  name: "Web Development",
  type: ["full-time", "part-time"],
  topics: ["HTML/CSS & Responsive Design", "JavaScript", "MongoDB", "Node", "Express", "React"]
};

//my code:
console.log(`course type = ${course.type[0]}`);
console.log(`the most familiar topic = ${course.topics[1]}`);
console.log(`the least familiar topic = ${course.topics[5]}`);

