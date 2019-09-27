
/*Define a function that will:
    count from 1 to 100,
    on numbers divisible with 4 print “Hey”,
    on numbers divisible with 6 print “There”,
    on numbers divisible with both 4 and 6 print “Ironhack”,
    skip numbers divisible with 7,
    on the number that represents your age add ! (ex. 34!).*/

var ans = "";


function count100(){
    for(var k = 1; k <= 100; k++){
    if (k % 24 == 0){
        ans += " Ironhack";
    }
    else if(k % 6 == 0){
        ans += " There"
    }
    else if(k % 4 == 0){
        ans += " Hey";
    }
    else if(k % 7 == 0){
        continue;
    }
    else{
        ans += " " + k;
    }
    if (k == 30){
        ans += "!"
    }
    
    }console.log(ans);
    
}

count100();