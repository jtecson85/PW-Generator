var charSelect = function() {
  // include lowercase characters
  var charLower = confirm('Would you like to include lowercase characters?');
  charLower = charLower ? "abcdefghijklmnopqrstuvwxyz" : "";

  // include uppercase characters
  var charUpper = confirm('Would you like to include uppercase characters?');
  charUpper = charUpper ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "";

  // include numeric characters
  var charNum = confirm('Would you like to include numbers?');
  charNum = charNum ? "0123456789" : "";

  // include special characters
  var charSpec = confirm('Would you like to include special characters?');
  charSpec = charSpec ? "!@#$%&*+" : "";

  // concatenates the selected character types
  var charString = charLower + charUpper + charNum + charSpec;

  // validates that at least one character type is selected
  if (charString.length > 0) {
    console.log("Character string is " + charString);
    return charString;
  } else {
    window.alert("Please choose at least one type of character.");
    return charSelect();
  }
};

var generatePassword = function() {
  // setting character length
  var charLength = prompt('How long would you like your password to be? Please enter a number between "8" and "128".');
  charLength = parseInt(charLength);

  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    return generatePassword();
  }

  // generates password based on selected criteria
  var charSet = charSelect();
  var retPassword = "";

  for (var i = 0, n = charSet.length; i < charLength; i++) {
    retPassword += charSet[Math.floor(Math.random() * n)];
  }

  console.log("Generated password is " + retPassword);

  return retPassword;
};

// Get references to the #generate and #copy elements
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Copy password to clipboard
function copyPassword() {
  var passwordText = document.querySelector("#password");
  passwordText.select();
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy button
copyBtn.addEventListener("click", copyPassword);
