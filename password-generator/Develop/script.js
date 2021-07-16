// Assignment code here

//variables
var number = ['0','1','2','3','4','5','6','7','8','9'];
var lowCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var special = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']'];
var characterPool = [];
var finalPassword = "";

//generate password function
var generatePassword = function(){
  var length = prompt("How many characters will your password be? Choose between 8 and 128.");
    if (length > 7  && length < 129) {
      //asks if numbers desired in password
      yesNumber = confirm("Do you your password to contain numbers?");
      //asks if lower case letters desired in password
      yesLowCase = confirm("Do you want your password to contain lower case letters?");
      //asks if upper case letters desired in password
      yesUpCase = confirm("Do you want your password to contain upper case letters?");
      //asks if special characters desired in password
      yesSpecial = confirm("Do you want your password to contain special characters?");
    }

    //closes window if characters < 8 || > 128
    else {
      if(error) {
      }

    }

  //adds numbers if selected earlier
  if (yesNumber){
    characterPool = characterPool.concat(number);
  }
  //adds lower case letters if selected earlier
  if (yesLowCase){
    characterPool = characterPool.concat(lowCase);
  }
  //adds upper case letters if selected earlier
  if (yesUpCase){
    characterPool = characterPool.concat(upCase);
  }
  //adds special characters if selected earlier
  if (yesSpecial){
    characterPool = characterPool.concat(special);
  }
  //for loop password generation
  for (var i = 0; i < length; i++){
    finalPassword = finalPassword + characterPool[Math.floor(Math.random() * characterPool.length)];
  }

  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
