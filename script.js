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
  var complexity = document.getElementById("slider").value;

  // // possible password values upper, lower, number, special characters.
  var values= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var password="";

// create for loop to choose password characters
for(var i=0; i <= complexity; i++){
  password = password + values.charAt(Math.floor(Math.random()* Math.floor(values.length-1)));
}

// add password to textbox/display area
document.getElementById("generate").value = password;

}

// function to set length based on slider position
document.getElementById("slider").oninput=function(){

  if(document.getElementById("slider").value>=8){
    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
  }
  else{
    document.getElementById("length").innerHTML = "Length: 8"
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
