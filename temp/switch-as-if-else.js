var typeOfPet = prompt("What type of pet do you have?");

if ( typeOfPet == "dog") {
  console.log("A " + typeOfPet + " is a normal pet.");
} 
else if ( typeOfPet == "cat" ) {
  console.log("A " + typeOfPet + " is a normal pet.");
} 
else if ( typeOfPet == "parrot" ) {
  console.log("A " + typeOfPet + " is a normal pet.");
} 
else if ( typeOfPet == "liger" ) {
  console.log( "WOW! You have a " + typeOfPet + ". You are so cool!");
} 
else {
  console.log("I have never heard of that type of pet");
}

// UNCOMMENT THIS CODE BELOW TO SEE AN EVEN MORE SIMPLIFIED APPROACH USING THE LOGICAL OR OPERTATOR

// if ( typeOfPet == "dog" || typeOfPet == "cat" || typeOfPet == "parrot") {
//   console.log("A " + typeOfPet + " is a normal pet.");
// } 
// else if ( typeOfPet == "liger" ) {
//   console.log( "WOW! You have a " + typeOfPet + ". You are so cool!");
// } 
// else {
//   console.log("I have never heard of that type of pet");
// }