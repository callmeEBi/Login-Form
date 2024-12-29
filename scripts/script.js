// ==========================================  variables  ==========================================
let $ = document;
let inputUserName = $.getElementById("username");
let inputPassword = $.getElementById("password");
let message = $.querySelector(".message");
let usernameInlineValidation = $.querySelector(".username_inline_validation");
let passwordInlineValidation = $.querySelector(".password_inline_validation");
let loginButton = $.querySelector(".login_button");
let body = $.querySelector("body");
// ==========================================  event listeners  ==========================================
inputUserName.addEventListener("blur", UsernameInlineValidation);
inputPassword.addEventListener("blur", PasswordInlineValidation);
loginButton.addEventListener("click", validate);
loginButton.addEventListener("click", toggleRed);

// ==========================================  other methods  ==========================================
setInterval(randomColor, 1000);
//  ========================================== functions ==========================================
function validate() {
  message.style.display = "initial";
  if (inputUserName.value.length >= 12 && inputPassword.value.length >= 8) {
    message.style.backgroundColor = "#397cc9";
    message.innerHTML = "you are being logged in ";
  } else {
    message.style.backgroundColor = "rgb(240, 19, 38)";
    message.innerHTML = "username or password is too short ";
  }

  setTimeout(() => {
    message.style.display = "none";
  }, 3000);
}

function UsernameInlineValidation() {
  if (inputUserName.value.length < 12) {
    usernameInlineValidation.style.display = "initial";
  } else {
    usernameInlineValidation.style.display = "none";
  }
}

function PasswordInlineValidation() {
  if (inputPassword.value.length < 8) {
    passwordInlineValidation.style.display = "initial";
  } else {
    passwordInlineValidation.style.display = "none";
  }
}

function toggleRed() {
  loginButton.classList.toggle("red");
}

function randomColor() {
  let r = Math.floor((Math.random() * 10000) % 256);
  let g = Math.floor((Math.random() * 10000) % 256);
  let b = Math.floor((Math.random() * 10000) % 256);
  let mainColor = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = mainColor;
}
