// Assignment code here

//function to get length of password from users.  If user entered <8 or >128 or no password, they will not be able to proceed.
function getLength() {
  charLength = "";
  var charLength = parseInt(window.prompt("Please enter a length of at least 8 characters and no more than 128 characters"))
  while (charLength < 8 || charLength > 128 || charLength === "" || isNaN(parseInt(charLength))) {
    var charLength = parseInt(window.prompt("Please enter a length of at least 8 characters and no more than 128 characters"));
  }
  return charLength;
}

//generate password function to get criteria and calculate password

function generatePassword() {
  passwordCharacters = "";
  newPassword = "";
  var charLength = getLength();
  var lowerCase = window.confirm("Would you like to include lowercase in password?");
  var upperCase = window.confirm("Would you like to include uppercase in password?");
  var numericValue = window.confirm("Would you like to include numeric value in password?");
  var specialChar = window.confirm("Would you like to include special characters in password?");

  while (!lowerCase && !upperCase && !numericValue && !specialChar) {
    window.alert("You must select at least one character type -- the more the better!");
    var lowerCase = window.confirm("Would you like to include lowercase in password?");
    var upperCase = window.confirm("Would you like to include uppercase in password?");
    var numericValue = window.confirm("Would you like to include numeric value in password?");
    var specialChar = window.confirm("Would you like to include special characters in password?");
  }

  // append password characters based on criteria.  initial value is empty string.
  if (lowerCase) {
    passwordCharacters = "abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase) {
    passwordCharacters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numericValue) {
    passwordCharacters += "0123456789";
  }
  if (specialChar) {
    passwordCharacters += " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  // based on the final list of password characters, calculate password.
  for (var i = 0; i < charLength; i++) {
    newPassword += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  }
  return newPassword;
}

// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
