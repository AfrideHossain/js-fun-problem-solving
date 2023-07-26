// function for generating random password
function randomPassword(passwordLength) {
  const allChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndx = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndx];
  }
  return password;
}

// testing function
let password = randomPassword(12);
console.log(password);
