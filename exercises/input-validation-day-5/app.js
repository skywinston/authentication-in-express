var phoneNumber = prompt("What is your phone number?\nPlease use the following format: ###-###-####");
var numberNoHyphens = phoneNumber.replace(/-/g,"");

if ( phoneNumber.charAt(3) !== "-" || phoneNumber.charAt(7) !== "-" || phoneNumber.length !== 12 || Number.parseInt(numberNoHyphens) !== typeof number || numberNoHyphens.length == 10) {
  phoneNumber = prompt("Please enter your phone number again with the following format: ###-###-####");
} else {
  console.log(phoneNumber);
}

var birthDate = prompt("What is your date of birth?\nPlease use the following format: XX/XX/XX");

if ( birthDate.charAt(2) !== "/" || birthDate.charAt(5) !== "/" || birthDate.length !== 8 ) {
  birthDate = prompt("Please enter your date of birth again in the following format: XX/XX/XX");
} else {
  console.log(birthDate);
}


