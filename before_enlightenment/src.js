module.exports = { 
  compact: function(input) {
    var output = [];
    for ( var i = 0; i < input.length; i++){
      if (input[i] !== undefined && input[i] !== null ){
        output.push(input[i]);
      } 
    }
    return output;
  },

  allEvenOrOdd: function(input){
    var evenCount = 0;
    var oddCount = 0;
    for (var i = 0; i < input.length; i++){

      if(input[i]%2==0){
        evenCount++;
      }
      else {
        oddCount++;
      }

    }

    if(evenCount === input.length || oddCount === input.length){
      return true;
    }
    else {
      return false;
    }
  },

  anyEven: function(input){
    for (var i = 0; i < input.length; i++) {
      if (input[i]%2 == 0){
        return true;
      }
    }
  },

  anyOdd: function(input){
    for (var i = 0; i < input.length; i++) {
      if (input[i]%2!==0){
        return true;
      }
    }
  },

  partitionEvensAndOdds: function(input){
    var evens = [];
    var odds = [];
    var output = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i]%2==0){
        evens.push(input[i]);
      }
      else {
        odds.push(input[i]);
      }
    }
    output.push(evens);
    output.push(odds);
    return output;
  },

  sumOfEvenAscii: function(string){
    var sum = 0;
    for (var i = 0; i < string.length; i++) {
      if (string.charCodeAt(i)%2==0){
        sum += string.charCodeAt(i);
      }
    }
    return sum;
  }
  
}