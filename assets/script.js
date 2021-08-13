// Assignment Code
let generateBtn = document.querySelector("#generate");

// Password Character Array

let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialChar = ['!','@','#','$','%','^','&','*','(','(','_','-','+','=','/','?','.'];
let numberList = ['0','1','2','3','4','5','6','7','8','9'];
// declared variables

let loop;
let length;
let lowerChoice;
let upperChoice;
let numberChoice;
let specialChoice;
let characterList;
let passwordVar;
// Write password to the #password input

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}





function generatePassword() {

loop = 0;

while (loop == 0) {

length = window.prompt("Enter password length: 8-128 characters");



if (length < 8 || (length > 128)) {
window.alert("ERROR");
}

else {
  loop++;

  console.log(length + "length test in loop");

}

}

window.alert("Password Length: " + length);

loop = 0;

while (loop == 0) {

lowerChoice = window.confirm("Include lowercase characters? ");

if (lowerChoice) {
  window.alert("Password includes lowercase characters.");
}

upperChoice = window.confirm("Include uppercase characters? ");
if (upperChoice) {
window.alert("Password includes uppercase characters");
}
numberChoice = window.confirm("Include numbers? ");
if (numberChoice) {
window.alert("Password includes numbers");
}

specialChoice = window.confirm("Include special characters? ");
if (specialChoice) {
window.alert("Special characters included");
}

if ( (!lowerChoice) && (!upperChoice) && (!specialChoice) && (!numberChoice) ) {
  window.alert("ERROR, YOU MUST CHOOSE AT LEAST 1 CHARACTER TYPE TO INCLUDE IN PASSWORD");

}

else {
  loop++;
  
}

}


characterList = [];

console.log(characterList + "PRE");

if (lowerChoice) {
characterList += lowerCase;

}

if (upperChoice) {
  characterList += upperCase;

}
if (specialChoice) {
  characterList += specialChar;
}

if (numberChoice) {
  characterList += numberList;
}



passwordVar = "";
for (let i = 0; i < length; i++) {
  
  passwordVar += characterList[Math.floor(Math.random() * characterList.length)];
  
}


return passwordVar;



}






generateBtn.addEventListener("click", writePassword);
