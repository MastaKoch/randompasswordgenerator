// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// write the generate password function ***
function generatePassword(){

  // set password length / complexity
  var complexity = 
  prompt("How long do you want your password to be (8-128 characters)?");

  if (complexity < 8) {
      alert("Password must be between 8 and 128 characters.");
      return "n/a";
  }

  if (complexity > 128){
      alert("Easy there, champ. Password must be between 8 and 128 characters.");
      return "n/a";
  }


  // // possible password values upper, lower, number, special characters.
  var values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var password="";

// create for loop to choose password characters
for(var i=1; i <= complexity; i++){
  password =  password + values.charAt(Math.floor(Math.random()* Math.floor(values.length-1)));
}

return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
