const form = document.getElementById("form");
const fnameInput = document.getElementById("fname");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("error-messages");

form.addEventListener("submit", (e) => {
  let error = [];

  if (fnameInput) {
    error = getSignupErrors(
      fnameInput.value,
      emailInput.value,
      passwordInput.value,
      confirmPasswordInput.value
    );
  } else {
    error = getLoginFormErrors(emailInput.value, passwordInput.value);
  }

  if (error.length > 0) {
    e.preventDefault();
    errorMessage.innerText = error.join(". ");
  }
});

const getSignupErrors = (fname, email, password, confirmPassword) => {
  let errors = [];
  if (fname === "" || fname === null) {
    errors.push("Name is required");
    fnameInput.parentElement.classList.add("incorrect");
  }
  if (email === "" || email === null) {
    errors.push("Email is required");
    emailInput.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    errors.push("Password is required");
    passwordInput.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errors.push("Password must have at least 9 characters");
    passwordInput.parentElement.classList.add("incorrect");
  }
  if (password !== confirmPassword) {
    errors.push("Password doesn't match");
    passwordInput.parentElement.classList.add("incorrect");
    confirmPasswordInput.parentElement.classList.add("incorrect");
  }
  return errors;
};

const getLoginFormErrors = (email, password) => {
  let errors = [];

  if (email === "" || email === null) {
    errors.push("Email is required");
    emailInput.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    errors.push("Password is required");
    passwordInput.parentElement.classList.add("incorrect");
  }
  return errors;
};

const allInput = [
  fnameInput,
  emailInput,
  passwordInput,
  confirmPasswordInput,
].filter((input) => input !== null);

allInput.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      errorMessage.innerText = "";
    }
  });
});
