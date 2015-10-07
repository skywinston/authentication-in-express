function outer(){
  var outerVariable = 0;
  function inner(){
    var innerVariable = 1;
    return innerVariable;
  }
  console.log(inner());
};

console.log(outer()); // 1

