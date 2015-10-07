function printGreeting (adjective, name){
  var message = "Hello there " + adjective + " " + name + "!";

  return function greeting(){
    console.log(message);
  }
};

var sky = printGreeting("silly", "Sky");

// sky();

function lateralus(){
  var line1 = "Black and white are all I see.";
  function secondLine(){
    var line2 = "Red and yellow then came to be.\n";
    var lyrics = line1 + "\n" + line2;
    function thirdLine (){
      var line3 = "Reaching out to me.";
      lyrics += line3;
      console.log(lyrics);
    }
    return thirdLine();
  }
  return secondLine() + "\nLet's me see"
}

lateralus();



