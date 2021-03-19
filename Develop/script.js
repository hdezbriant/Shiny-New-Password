// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// var password = generatePassword();
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passwordLength = 
  window.prompt("How many characters should your password be?\n(Must be between 8 - 128 characters.)");
  
  // ⬇⬇⬇Overwrites whatever is in PW field with result of password function
  // passwordText.value = password;
  
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a valid number of characters.");
    return;
  }
  
  if (passwordLength >= 8 && passwordLength <= 128) {

    // =====================================
    //  Add this to an array, do for all types of chars
    //  =====================================
    var allCaps = 
    ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var rndmChar = Math.floor(Math.random() * allCaps.length);
    var rndmCap = allCaps[rndmChar];
    var includeCaps = window.confirm("Include capital letters?");
    var includeLower = window.confirm("Include lower case letters?");
    var includeNumber = window.confirm("Include numbers?");
    var includeSpecials = window.confirm("Include special characters?");
    
    console.log(includeCaps)
    console.log(includeLower)
    console.log(includeNumber)
    console.log(includeSpecials)

    // ===============================
    // Add random index to password
    // if password < passwordLength at end
    // keep getting random chars from combined possibleChars array
    // ===============================


  //   if (includeCaps || !includeCaps) {
      
  //     console.log(includeLower);
  //   } 
    
  //   if (includeLower || !includeLower) {
  //     // window.confirm("Include numbers?");
      
  //     console.log(includeNumber);
  //   }
    
  //   if (includeSpecials || !includeSpecials) {
  //     // window.confirm("Include special characters?");
      
  //     console.log(includeSpecials);
  //   }
  }
}
    
    
    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    
    // Target Text field in HTML and output text inside
    //    will need later
    // document.getElementById("password").innerHTML = Date();
    
    
    
    //  JUST FOR REFERENCE:
    //  Additional method for choosing random char in string
    //  Alternative to Array method
    // 
    // vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
    // function makeid() {
    //   var text = "";
    //   var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    //   for (var i = 0; i < 5; i++)
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));

    //   return text;
    // }

    // console.log(makeid());