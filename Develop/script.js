// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // ⬇⬇⬇Overwrites whatever is in PW field with result of password function
  // passwordText.value = password;

  window.prompt("How many characters should your password be?")
  // console.log();


  window.confirm("Include capital letters?");

  
  window.confirm("Include lower case letters?") ;


  window.confirm("Include numbers?");


  window.confirm("Include special characters?");
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Target Text field in HTML and output text inside
//    will need later
// document.getElementById("password").innerHTML = Date();