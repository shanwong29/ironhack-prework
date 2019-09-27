
/*Capitalize:
a) the whole name of the city where you are now */

let city = "Macau";
console.log(city.toUpperCase());
console.log(city[0].toUpperCase()+ city.substring(1,city.length));

//b) the first letter of the city
let cityUp = city.toUpperCase();

if(city.length % 2 == 0){
 console.log(city.slice(0,(city.length)/2 - 1) + cityUp.slice((city.length)/2 - 1, (cityUp.length)/2 + 1) + city.slice((city.length)/2 + 1, city.length + 1));
}


/*c) capitalize the middle letter if the city has an odd number of letters or two middle letters if the city has even number of letters 
(hint: you can use .charAt() and .slice())*/
if(city.length % 2 != 0){
 console.log(city.slice(0, Math.floor(city.length/2)) + cityUp[Math.floor(city.length/2)] + city.slice ((city.length/2+ 1), city.length));
}


