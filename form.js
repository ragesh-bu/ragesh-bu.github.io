function validateForm(e) {
  const LETTERS = /^[A-Za-z]+$/;
  const EMAIL_VALID = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let firstName = document.getElementById("firstName");
  let lastName = document.getElementById("lastName");
  let email = document.getElementById("email");
  let errorElems = ["firstNameError", "lastNameError", "emailError"];
  for (const elem of errorElems){
    errorMessageElem("", elem);
  }
  //Check the firstName length
  if (firstName.value.length < 1) {
    errorMessageElem("Please enter a first name", "firstNameError");
    firstName.focus();
    e.preventDefault();
    return false;
  }

  //Check the firstName only contains alphabets
  if (!firstName.value.match(LETTERS)) {
    errorMessageElem("First name should only contain letters", "firstNameError");
    firstName.focus();
    e.preventDefault();
    return false;
  }

  //Check the lastName length
  if (lastName.value.length < 1) {
    errorMessageElem("Please enter a last name", "lastNameError");
    lastName.focus();
    e.preventDefault();
    return false;
  }

  //Check the lastName only contains alphabets
  if (!lastName.value.match(LETTERS)) {
    errorMessageElem("Last name should only contain letters", "lastNameError");
    lastName.focus();
    e.preventDefault();
    return false;
  }


  // If the email is provided check if its a valid format
  if (!email.value.match(EMAIL_VALID))
  {
    errorMessageElem("Please enter a valid email address", "emailError");
    email.focus();
    e.preventDefault();
    return false;
  }

  alert("Thank you for connecting!! Have a nice day")
  return true;
}


function errorMessage(msg) {
  var error = document.getElementById("error");
  error.textContent = msg;
  error.style.color = "red"
}

function errorMessageElem(msg, elemId) {
  var error = document.getElementById(elemId);
  error.textContent = msg;
  error.style.color = "red"
}
