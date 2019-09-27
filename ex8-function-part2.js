/* 4. Define a function printArrElements(someArr) that will loop through array and print all the elements of that array. 
   Use the following array to pass it as an argument to the function you’ve just defined: */

let ironCities = ["Amsterdam", "Barcelona", "Berlin", "Lisbon", "Madrid", "Mexico City", "Miami", "Paris", "Sao Paulo" ];

function printArrElements(someArr){
    someArr.forEach(function(element){
        console.log(element)
    })
}

printArrElements(ironCities);

   
   
   
//5. Define an array of your favorite cities and pass it as an argument to the previously defined function. Invoke a function.
arrMyFavCity = ["Berlin", "Hong Kong", "Bali", "London", "Prague"]
printArrElements(arrMyFavCity);

   
   
//6. Define another array of your favorite food and pass it to this function when invoking it.
arrMyFavFood = ["kimchi", "chcoclate", "chip", "sushi", "currywurst", "kiwifruit"]
printArrElements(arrMyFavFood);
   
   
   
//7. Define a function printEvens(someArr) and use the ironCities array and print only its even elements. The output should be:
function printEvens(someArr){
    someArr.forEach(function(evenCity){
        if(someArr.indexOf(evenCity) % 2 == 0){
            console.log(evenCity);
        }
    })
}

printEvens(ironCities);
