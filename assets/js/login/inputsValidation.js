
function inputValidation(inputsForms, iconPassword, passwordLogin){    
    activeInputsOnClick();
    function activeInputsOnClick() {
      inputsForms.forEach((input) => {
        input.addEventListener("blur", () => {
        inputEffect(input);
        });
      });
    }
    iconPassword.addEventListener("click", function () {
      passwordLogin.type =passwordLogin.type === "password" ? "text" : "password";
      passwordLogin.classList.toggle("bx-show");
      passwordLogin.classList.toggle("bx-hide");
    });
};

function inputEffect(input) {

  if(input.type === "password"){
      const password = input.value;
      const hasSpaces = /\s/.test(password);

      if (!input.validity.valid) {
        input.parentElement.classList.add("active-error");
        return hasAnError(input, "Empty password ");
      }

      if(hasSpaces && input.validity.valid || !input.validity.valid){
        input.parentElement.classList.add("active-error");
        input.parentElement.classList.remove("active");
        return hasAnError(input, "No space allowed");
      }else{
        input.parentElement.classList.remove("active-error");
        input.parentElement.classList.add("active");

      }
  }else{
    if(input.validity.valid){
      input.parentElement.classList.remove("active-error");
      input.parentElement.classList.add("active");
    }else{
      if(input.type === "email"){
        hasAnError(input, "Please type your email")
      }
      input.parentElement.classList.add("active-error");
      input.parentElement.classList.remove("active");
    }
  }
}



const addErrorElement = (container, message) => {
  const errorElement = document.createElement("p");
  errorElement.className = "input-error";
  errorElement.textContent = message;
  container.appendChild(errorElement);
};

const hasAnError = (input, message) => {
  const containerParent = input.parentElement;
  addErrorElement(containerParent, message);
  input.focus();
  input.value = "";
  containerParent.classList.add("active-error");

  setTimeout(() => {
    const errorElement = containerParent.querySelector(".input-error");
    if (errorElement) {
      containerParent.removeChild(errorElement);
    }
  }, 4000);
};

const errorFromServer = (inputs, type, message) => {
  inputs.forEach((input) => {
    if (input.type === type) {
      hasAnError(input, message);
    }
  });
};

function printErrorConfirmation(message) {
  const pTag = document.querySelector("p.login_data-text");
  pTag.textContent = message;
}



export {
  errorFromServer,
  inputValidation, 
  printErrorConfirmation
};