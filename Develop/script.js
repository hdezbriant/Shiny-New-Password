// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// ===================================================
// Generate random characters based on user selections
// ===================================================
function generatePassword() {
  var passwordLength = 
  window.prompt("How many characters should your password be?\n(Must be between 8 - 128 characters.)");
  
  
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
    
    //  ⬇ Home array for combined user choice categories
    var bigRandom = [];
    
    
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
    
    if (bigRandom == "") {
      window.alert("Please select at least one category of characters.");
      return;
    }
    
    // ⬇⬇⬇ Alternate conditional for blank array. ⬇⬇⬇
    // if (!includeCaps && !includeLower && !includeSpecials && !includeNumber) {
    //   window.alert("Please select at least one category of characters.");
    // }
      
    for (i = 0; i < passwordLength; i++) {
      var rndmChoice = bigRandom[Math.floor(Math.random() * bigRandom.length)];
    }

    
    // console.log(rndmChoice)
    return;
  }
}
  
  // Write password to the #password input
  // writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");
  // passwordText.value = password;
  // }
  // ⬇⬇⬇Overwrites whatever is in PW field with result of password function


  // ===============================
  // Add random index to password
  // if password < passwordLength at end
  // keep getting random chars from combined possibleChars array
  // ===============================
  
  
  