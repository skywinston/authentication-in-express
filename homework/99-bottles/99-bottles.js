for ( i = 99; i >= 1; i-- ) {
  if ( i > 2 ) {
    console.log(
      i + " bottles of beer on the wall " + i + " bottles of beer\n" + 
      "Take one down and pass it around " + (i-1) + " bottles of beer on the wall\n"
  );} else if ( i == 2 ) {
    console.log(
      i + " bottles of beer on the wall\n" + 
      i + " bottles of beer\n" + 
      "Take one down and pass it around\n" +
      (i-1) + " more bottle of beer on the wall\n"
  );} else if ( i == 1 ) {
    console.log(
      i + " bottle of beer on the wall\n" + 
      i + " bottle of beer\n" + 
      "Take one down and pass it around\n" +
      "No more bottles of beer on the wall\n" + 
      "No more bottles of beer on the wall, no more bottles of beer.\n" + 
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    );}
}