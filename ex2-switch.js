let fruit = "peas";
let type = "";

switch(fruit){
  case "pear": case "apple": 
    type = "pome"
  break; 
  case "peach": case "coconut":
    type = "drupe"
  break; 
  case "strawberry": case "blackberry": case "blueberry":
    type = "berry"
  break; 
  case "beans": case "peas":
    type = "legumes";
  break;
  default:
    type = "others";
  break;
}
console.log(`${fruit} is type of: ${type}.`);

