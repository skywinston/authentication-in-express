//Exercise 1

// As a for loop
for ( var i = 0; i <= 10; i++ ){
  if (i % 2 !== 0) {
    console.log(i + "(odd)");
  } else {
  console.log(i + "(even)");
  }
}

//As a while loop
var j = 1;
while ( j <= 10) {
  if (j % 2 !== 0) {
    console.log(j + "(odd)");
    j++;
  } else {
    console.log(j + "(even)");
    j++;
  }
}

//Exercise 2

for ( var i = 0; i <= 4; i++) {
  var teams = "Team 1\nTeam 2\nTeam 3\nTeam 4"
  console.log("Conference " + i + ":\n" + teams);
}

var i = 1 
while ( i <= 4 ) {
  var teams = "Team 1\nTeam 2\nTeam 3\nTeam 4"
  console.log("Conference " + i + ":\n" + teams);
  i++;
}

//Exercise 3

for ( i = 1; i <= 5; i++){
  var result = 11*i;
  console.log("11 times " + i + " equals " + result);
}

var i = 1;
while ( i <= 5 ) {
  var result = 11*i;
  console.log("11 times " + i + " equals " + result);
  i++;
}

function greet(name){
  console.log("Hello " + name);
}

greet("Sky");

//function that determines if everything in it is a number
function isNumber (isThisANumber) {
  var answer;
  for ( var i = 0; i < isThisANumber.length; i++ ) {
    if (isThisANumber[i] == typeof number || isThisANumber[i] = "-") {
      answer = true;
    } else {
      answer = false;
    }
    return answer;
  }
}

function sumOfAllNumbers(){
  var numbersArray = arguments;
  var result = 0;
  for ( var i = 0; i < numbersArray.length; i++) {
    result+=numbersArray[i];  
  }
  return result;
};

console.log(sumOfAllNumbers(1,2,3,4,5)); //15
console.log(sumOfAllNumbers(1,2)); //3
console.log(sumOfAllNumbers(4,4,6)); //14

//Write an anonymous function
//If its argument is your name, say Hello, my is "NAME"
//If its argument is not your name, say, Nice to meet you "NAME"

(function(name){
  var myName="Sky";
  if ( name === myName){
    console.log("Hello, my name is " + myName);
  } else {
    console.log("Nice to meet you " + name);
  }
})("Sky")















