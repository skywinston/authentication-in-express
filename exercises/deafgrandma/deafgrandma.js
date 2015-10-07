var heyGrandma = prompt("What do you want to say to Grandma?");
var randomYear = function (min, max) {
  return Math.random() * (max - min) + min;
};

for ( i = 0; i < heyGrandma.length; i++) {
  if ( heyGrandma[i] !== heyGrandma[i].toUpperCase() ) {
    heyGrandma = prompt("Grandma Says: 'HUH?! SPEAK UP, SONNY!'")
  } else {
    heyGrandma = alert("NO, NOT SINCE " + randomYear(1930, 1950).toFixed(0) + "");
  }
}

