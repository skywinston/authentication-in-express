var math = {
  sum: function(){
    sumToReturn = 0;
    var numbers = arguments;
    for (var i = 0; i < arguments.length; i++){
    sumToReturn += arguments[i];
    }
    return sumToReturn;
  },
  difference: function(x,y){
    return (x-y);
  },

  square: function(x){
    return (x*x);
  }
};

// console.log(math.sum(1,2,3)); // 6
// console.log(math.difference(10,5)) // 5
// console.log(math.square(2)) // 4

// Afternoon challenges with Andres

//Challenge 1
function reverseString(string) {
  return string.split("").reverse().join("");
};

// console.log(reverseString('')); // ''
// console.log(reverseString('foof')); // 'foof'
// console.log(reverseString('stringey')); // 'yegnirts'

// 2 using a while loop
function reverseStringTwo(string){
  var result = "",
    i = string.length - 1;

  while (i >- 0) {
    result += string.charAt(i);
    i--;
  }
}

// 3 using recursion
function reverseStringRecursively(string) {
  function go (string, output) {
    if (string.length == 0) return output;

    return go(string.slice(0,string.length -1), output + string.charAt(string.length -1));
  }

  return go(string, "");
}

//Challenge 2
function reverseArray(array){
  var output = [];
  for ( var i = 0; i < array.length; i++ ){
    output.unshift(array[i]);
  }
  return output;
};

// reverseArray([]); // []
// console.log(reverseArray([1,2,3,4])); // [4,3,2,1]
// console.log(reverseArray([{obj1: true}, {obj2: false}])); // [{obj2: false}, {obj1: true}]

// Andreas' Solutions
// 1 using a for loop
function reverseArray(array) {
  var result = [];

  for (var i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  }

  return result;
}

// 2 using a while loop
function reverseArray(array) {
  var result = [],
      i = array.length - 1;

  while (i >= 0) {
    result.push(array[i]);
    i--;
  }

  return result;
}

// 3 using recursion
function reverseArray(array) {
  function go(array, output) {
    if (array.length == 0) return output;
    return go(array.slice(0, array.length-1), output.concat(array[array.length - 1]));
  }

  return go(array, []);
}

// 4 also using recursion
function reverseArray(array) {
  function go(array, output) {
    if (array.length == 0) return output;

    return go(array.slice(1), Array().concat(array[0], output));
  }

  return go(array, []);
}

reverseArray([]); // []
reverseArray([1,2,3,4]); // [4,3,2,1]
reverseArray([{obj1: true}, {obj2: false}]); // [{obj2: false}, {obj1: true}]


//Challenge 3
//Challenge 3
function flexString(string){
  var newArray = arguments;
  var output="";
  if ( newArray.length % 2 == 0 ) {
    for (var i = 0; i < newArray.length; i++){
      output += newArray[i]+",";
    }
  } else if (newArray.length % 2 !== 0) {
    for (var j = 0; j < newArray.length; j++){
      output += newArray[j]+"|";
    }
  }
  
  return output.substring(0, output.length - 1);
};

console.log(flexString('some', 'strings')); // "some,strings"
console.log(flexString('some', 'strings', 'are')); // "some|strings|are"
console.log(flexString('some', 'strings', 'are', 'sometimes')); // "some,strings,are,sometimes"
console.log(flexString('some', 'strings', 'are', 'sometimes', 'cool')); // "some|strings|are|sometimes|cool"

function zipArray(first, second){
  var result = [];
  if (first.length === second.length){
    for (var i = 0; i < first.length; i++){
      result.push(first[i], second[i]);
    } 
  } else if (first.length < second.length){
    for (var j = 0; j < first.length; j++){
      result.push(first[j], second[j]);
    }
    for (var k = first.length; k < second.length; k++){
      result.push(second[k]);
    } 
  } else if (first.length > second.length){
    for (var j = 0; j < second.length; j++){
      result.push(first[j], second[j]);
    }
    for (var k = second.length; k < first.length; k++){
      result.push(first[k]);
    }
  }
  return result;
}
 

