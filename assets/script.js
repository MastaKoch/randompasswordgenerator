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

      // // possible password values upper, lower, number, special characters.
            var upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            var lower= "abcdefghijklmnopqrstuvwxyz";
            var number= "0123456789";
            var special= "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
            var values= "";

            var password="";

    var upperConfirm = confirm("Do you want upppercase letters in your password?");
        if (upperConfirm){
            // add "ABCDEFGHIJKLMNOPQRSTUVWXYZ" onto master values string.
            values= values += upper;

        }

    var lowerConfirm = confirm ("Do you want lowercase letters in your password?");
        if (lowerConfirm){
            // add "abcdefghijklmnopqrstuvwxyz" onto master values string.
            values= values += lower;
          
        }
    var numbConfirm = confirm ("Do you want numbers in your password?");
        if (numbConfirm){
            // add "0123456789" onto master values string.
            values= values +=number;
        }
    var specConfirm = confirm ("Do you want special characters in your password?");
        if (specConfirm){
            // add "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~" onto master values string.
            values= values +=special;
        }
//   set password length / complexity
  var complexity =   

  prompt("How long do you want your password to be (8-128 characters)? Passwords will automatically generate with uppercase, lowercase letters, special characters, and numbers.");

  if (complexity < 8) {
      alert("Password must be between 8 and 128 characters.");
      return "n/a";
  }

  if (complexity > 128){
      alert("Easy there, champ. Password must be between 8 and 128 characters.");
      return "n/a";
  }


// create for loop to choose password characters
for(var i=1; i <= complexity; i++){
  password =  password + values.charAt(Math.floor(Math.random()* Math.floor(values.length-1)));
}

return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
