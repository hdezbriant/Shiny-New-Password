// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
// var password = generatePassword();

function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = 
  window.prompt("How many characters should your password be?\n(Must be between 8 - 128 characters.)");
  
  // ⬇⬇⬇Overwrites whatever is in PW field with result of password function
  // passwordText.value = password;
  
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    window.alert("Please enter a valid number of characters.");
    return;
  }
  
  if (passwordLength >= 8 && passwordLength <= 128) {

    // =================================
    // Start collecting info for randomizer function
    // =================================
    var allCaps = 
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var allLower = 
    ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var allSpecial = 
    ["!", "@", "#", "$", "%", "&", "(", ")", "*", "+", ",", 
    "-", ".", "/", ":", ";", "<", "=", ">", "?", "^","|", "~"];
    var allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    //  ⬇ Home array for combined user choices
    var bigRandom = [];

    var rndmChar = Math.floor(Math.random() * allCaps.length);
    var rndmCap = allCaps[rndmChar];
    var includeCaps = window.confirm("Include capital letters?");
    var includeLower = window.confirm("Include lower case letters?");
    var includeNumber = window.confirm("Include numbers?");
    var includeSpecials = window.confirm("Include special characters?");
    
    // =======Testers============
    // console.log(includeCaps);
    // console.log(includeLower);
    // console.log(includeNumber);
    // console.log(includeSpecials);
    // console.log(bigRandom);
    // =======Testers============
    
    if (includeCaps) {
      bigRandom = bigRandom.concat(allCaps);  
    } 
    
    if (includeLower) {
      bigRandom = bigRandom.concat(allLower);
    }
    
    if (includeSpecials) {
      bigRandom = bigRandom.concat(allSpecial);
    }

    if (includeNumber) {
      bigRandom = bigRandom.concat(allNums);
    }

    console.log(bigRandom);
    return
        }
      }
      
      
      // ===============================
      // Add random index to password
      // if password < passwordLength at end
      // keep getting random chars from combined possibleChars array
      // ===============================
    

    // Target Text field in HTML and output text inside
    // document.getElementById("password").innerHTML = Date();
    