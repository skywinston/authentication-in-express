// Exercise 1 — Refactor the function to use an inner function.
function convoluted(string) { 

  var output = '';

    function weirdling () {
      for(var i = 0; i < string.length; i++) { 
        output += ('—' + string.charAt(i)); 
      }

      for(var i = 0; i < string.length; i++) { 
        output += ('|' + string.charAt(i)); 
      }
      return output;
    }

  return weirdling(string);
}

convoluted("This is my sample string");


//Exercise 2 — Mentally evaluate the following code example. List out all things that are logged to the console, in the order they are logged.

var bestMessageEver = 'Here is a message that is just the best.';
function worstMessageEver() {
  console.log(bestMessageEver);
  var bestMessageEver = 'Here is a message that is just the worst.';
  return;
}
worstMessageEver();

// undefined
// This is undefined because the declaration for the var bestMessageEver inside the worstMessageEver function is being hoisted to
// the top of that function.
// The delcaration is always undefined until the variable is intialized.  
// It's initialized after the console.log which is why it is showing undefined when called.


// Exercise 3 — Mentally evaluate the following code example. List out all things that are logged to the console, in the order they are logged.

b = 10;
console.log(b);
b = 11;
console.log(b);

var someValue = (function() {
  b = 12;
  return b;
})();
console.log(someValue);

// 10
// 11
// 12 


// Exercise 4 — Create code examples (different from the ones you have seen so far) to illustrate local, global, and lexical scoping. 
// You may use comments to explain how each example illustrates the concept.

var global = "I'm global";

function myFunction(){
    var local = "I'm local to myFunction";
    
    function nestedFunction(){
    local = "Now I'm nested"; //reassignment illustrates lexical scoping
    return local;
    }
    
    return nestedFunction();
};

myFunction(); // Now I'm nested


// Exercise 5 — Create a code example (different from the ones you have seen so far) that illustrates what a closure is. 
// You may use comments to explain how the example illustrates the concept.

function makeWords (phrase){
  var word = "Global, ";  // the first variable declared local to this variable.

  function addLocal(){
    word += "local, "; // the variable is added to using lexical scoping reassignment.

    function addLexical () {
      word += "and lexical scoping ";
      return word;
    }
    return addLexical();  // we are returning+executing this function which is adding to word yet again via lexical scoping reassignment.  
  
  }

  return addLocal() + "" + phrase; // finally, we are returning addLocal which contains the "Global, local, and lexical scoping", 
                                    // and adding the "phrase" argument.
}

makeWords("is the best!"); // Global, local, and lexical scoping is the best!


// Exercise 6 — [Challenge] Mentally evaluate the following code example. What is the value logged to the console? 

console.log((function (value) { return (function (copy) { return copy === value; })(value); })("Hello World"));

console.log(
  (function(value){
    return (function (copy) {
      return copy === value;
    })(value);
  })("Hello World!")
);

// returns true


// Exercise 7 — [Challenge] Explain the previous problem (again, do not use an interpreter, just your mind). 
// If the argument "Hello World" is changed to [1,2,3] what changes in the output? How about if the argument is "FooBarSki"?

// It would also evaluate to true, because the copy === value line.  We're passing in [1,2,3] into 
// the outermost immeditely-invoked functionon on line 110.  And that same value is passd into the innermost immediately invoked function on line 107.
// That innerfunction is asking if [1,2,3] = [1,2,3], which will evalutate to true.



